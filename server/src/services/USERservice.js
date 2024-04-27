const bcrypt = require("bcryptjs");
const db = require("../models/index");
const { createToken, verifyToken } = require("../middleware/jwt");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");

const salt = bcrypt.genSaltSync(10);

const getUserByToken = async (token) => {
    try {
        let data = verifyToken(token);
        let user = await db.User.findOne({
            where: {
                email: data.email,
            },
            raw: true,
            attributes: {
                exclude: ["password"],
            },
        });
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
};

let checkUserEmail = async (email) => {
    try {
        let user = await db.User.findOne({
            where: { email },
        });
        return user;
    } catch (error) {
        console.log(error);
    }
};
let checkUserByPhone = async (sdt) => {
    try {
        let user = await db.User.findOne({
            where: { sdt },
        });
        return user;
    } catch (error) {
        console.log(error);
    }
};

let serviceLogin = async (emailIP, passwordIP) => {
    try {
        let userData = {};
        let isExist = await checkUserEmail(emailIP);
        if (isExist) {
            let user = await db.User.findOne({
                where: { email: emailIP },
                raw: true,
            });

            if (user) {
                let check = bcrypt.compareSync(passwordIP, user.password);
                if (check) {
                    userData.errCode = 0;
                    userData.errMessage = "Ok";
                    delete user.password;
                    userData.token = createToken({
                        email: user.email,
                        roleID: user.roleId,
                        expiresIn: 60 * 60 * 1000,
                    });
                    userData.user = user;
                } else {
                    userData.errCode = 3;
                    userData.errMessage = "Error password ";
                }
            } else {
                userData.errCode = 2;
                userData.errMessage = "User's not found !!!";
            }
        } else {
            userData.errCode = 1;
            userData.errMessage = "Email isn't exist !!!";
        }
        return userData;
    } catch (error) {
        console.log(error);
    }
};
const serviceCreateNewUser = async (data) => {
    try {
        // check user exists  ?
        let check = await checkUserEmail(data.email);
        if (check === true) {
            return {
                errCode: 1,
                message: "Your email is already in use",
            };
        }

        const hashPasswordOutput = await hashPassword(data.password);
        await db.User.create({
            id: uuidv4(),
            name: data.name,
            email: data.email,
            sdt: data.sdt,
            money: 0,
            address: data.address,
            yearOfBird: data.yearOfBird,
            password: hashPasswordOutput,
            roleId: "USER",
        });
        return {
            errCode: 0,
            message: "Ok",
        };
    } catch (error) {
        console.log(error);
        return {
            errCode: 2,
            message: "CREATE FAILED",
        };
    }
};

let serviceGetUser = async ({ name, ...query }) => {
    if (name) query.name = { [Op.substring]: name };
    try {
        let users = await db.User.findAll({
            where: query,
            attributes: {
                exclude: ["password"],
            },
        });
        return users;
    } catch (error) {
        console.log(error);
    }
};

let serviceDelete = async (idInput) => {
    try {
        let userFound = await db.User.findOne({
            where: {
                id: idInput,
            },
        });

        if (!userFound) {
            return {
                errCode: "2",
                errMessage: "User not found",
            };
        } else {
            await db.User.destroy({
                where: { id: idInput },
            });
            return {
                errCode: "0",
                errMessage:
                    "Deleted Successfully user name : " + userFound.email,
            };
        }
    } catch (error) {
        console.log(error);
    }
};

let serviceEditUser = async (userData) => {
    try {
        if (!userData.id) {
            return {
                errorCode: 1,
                errMessage: "Missing required parameter id",
            };
        }
        let user = await db.User.findOne({
            where: { id: userData.id },
            raw: false,
        });

        if (user) {
            if (userData.password) {
                user.password = await hashPassword(userData.password);
                await user.save();
                delete user.password;
                return {
                    errCode: 0,
                    mess: "Updated Password User Successfully",
                    data: { ...user.dataValues, password: undefined },
                };
            } else {
                user.name = userData.name;
                user.sdt = userData.sdt;
                user.address = userData.address;
                user.birthday = userData.birthday;
                user.roleId = userData.roleId;
                await user.save();
                delete user.password;
            }
            return {
                errorCode: 0,
                errMessage: "Ok",
                data: { ...user.dataValues, password: undefined },
            };
        } else {
            return {
                errorCode: 1,
                errMessage: "Not Found user",
            };
        }
    } catch (error) {
        console.log(error);
    }
};

const serviceEditAvatar = async (id, pathFile) => {
    try {
        let user = await db.User.findOne({
            where: {
                id,
            },
            raw: false,
            attributes: {
                exclude: ["password"],
            },
        });
        if (!!user) {
            user.avatar = pathFile;
            await user.save();
            return user;
        } else {
            return "not found user";
        }
    } catch (error) {
        console.log(error);
        return "Error editing avatar";
    }
};

const loginOthers = async (data) => {
    try {
        let response = {};
        let result = await db.User.findOrCreate({
            where: { id: data.uid },
            defaults: {
                id: data.uid,
                email: data.email,
                typeLogin: data.providerData[0].providerId,
                name: data.displayName,
                avatar: data.photoURL,
                tokenLogin: "no",
                roleId: "USER",
            },
            raw: true,
        });

        if (result) {
            response.user = result[0];
            response.token = createToken({
                email: result[0].email,
                roleID: result[0].roleId,
                expiresIn: 60 * 60 * 1000,
            });
        }
        return response;
    } catch (error) {
        console.log(error);
        return "Failed at authenticating user";
    }
};



module.exports = {
    serviceCreateNewUser,
    serviceGetUser,
    serviceDelete,
    serviceEditUser,
    serviceEditAvatar,
    serviceLogin,
    getUserByToken,
    loginOthers,
    checkUserEmail,
    checkUserByPhone,
};
