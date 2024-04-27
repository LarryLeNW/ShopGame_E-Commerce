const sendMail = require("../../util/sendMail");
const db = require("../models");
const userService = require("../services/USERservice");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

exports.loginOthers = async (req, res) => {
    try {
        console.log(req.body);
        if (!req.body)
            return res.status(400).json({
                err: 1,
                msg: "Not Found Info",
            });
        let response = await userService.loginOthers(req.body);
        return res.status(200).json(response.user);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at auth controller " + error,
        });
    }
};

////----------------------------------------------------------------
exports.requireForgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(404).json("Missing params ... ");
        let user = null;
        user = (await userService.checkUserEmail(email))
            ? await userService.checkUserEmail(email)
            : await userService.checkUserByPhone(email);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const resetToken = await user.createPasswordChangedToken();
        await user.save();
        const html = `Xin vui lòng click vào link dưới đây để thay đổi mật khẩu của bạn.Link này sẽ hết hạn sau 15 phút kể từ bây giờ. <a href=${process.env.IP_CLIENT}/reset-password/${resetToken}>Click here</a>`;
        const data = {
            email: user.email,
            html,
        };
        const rs = await sendMail(data);
        return res.status(200).json({
            success: true,
            rs,
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success: false,
            mess: "something went wrong . ",
        });
    }
};

///----------------------------------------------------------------
exports.resetPassword = async (req, res) => {
    const { password, token } = req.body;
    try {
        if (!password || !token)
            return res
                .status(404)
                .json({ success: false, message: "miss parameter ...." });

        const passwordResetToken = await crypto
            .createHash("sha256")
            .update(token)
            .digest("hex");
        const user = await db.User.findOne({
            where: {
                passwordResetToken,
            },
        });

        if (!user)
            return res
                .status(404)
                .json({ success: false, message: "Invalid reset token" });

        if (user.passwordResetExpires - Date.now() < 0)
            return res
                .status(404)
                .json({ success: false, message: "The token has expired" });

        user.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        user.passwordResetToken = null;
        user.passwordResetExpires = null;
        await user.save();
        return res.status(200).json({
            success: user ? true : false,
            mes: user ? "Updated password" : "Something went wrong...",
        });
    } catch (error) {
        console.log(error);
        return res
            .status(404)
            .json({ success: false, message: "Something went wrong ..." });
    }
};
///-----------------------------------------------------------------
exports.getUserByToken = async (req, res) => {
    let token = req.body.token;
    let result = await userService.getUserByToken(token);
    if (result !== null) {
        res.status(200).json(result);
    }
};

///-----------------------------------------------------------------

// ----------------------------------------------------------------
exports.createUser = async (req, res) => {
    let result = await userService.serviceCreateNewUser(req.body);
    if (result.errCode === 1) return res.status(400).json(result);
    return res.status(200).json(result);
};

// ----------------------------------------------------------------
exports.getUser = async (req, res) => {
    if (!req.query) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing required parameter",
        });
    }
    let result = await userService.serviceGetUser(req.query);
    return res.status(200).json(result);
};

//----------------------------------------------------------------
exports.deleteUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameter",
        });
    }

    let message = await userService.serviceDelete(req.body.id);
    return res.status(200).json(message);
};

//------------------------------------------------------
exports.editUser = async (req, res) => {
    let data = req.body;
    let result = await userService.serviceEditUser(data);
    return res.status(200).json(result);
};

exports.editAvatarUser = async (req, res) => {
    let { id } = req.body;
    let pathFile = req.uploadedFiles[0];
    if (!id) return res.status(400).json("Missing parameter id");
    if (!pathFile) return res.status(400).json("Missing parameter path file");
    let result = await userService.serviceEditAvatar(id, pathFile);
    return res.status(200).json(result);
};

exports.login = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log(req.body);
    if (!email || !password) {
        return res.status(200).json({
            errCode: 1,
            message: "Missing parameters ",
        });
    }

    let userData = await userService.serviceLogin(email, password);

    if (userData.errCode === 0) {
        res.cookie("jwt", userData.token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
        });
        return res.status(200).json({
            errorCode: userData.errCode,
            message: userData.errMessage,
            user: userData.user ? userData.user : {},
        });
    } else {
        return res.status(400).json({
            errorCode: userData.errCode,
            message: userData.errMessage,
        });
    }
};
