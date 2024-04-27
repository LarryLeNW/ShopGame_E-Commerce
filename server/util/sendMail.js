const nodemailer = require("nodemailer");

const sendMail = async ({ email, html }) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "larrylenw@gmail.com", // generated ethereal user
            pass: "jznq ozqn aocx hqhh", // generated ethereal password
        },
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Shop Game VN " <relply@larrylenw@gmail.com>', // sender address
        to: email,
        subject: "Forgot your password", // Subject line
        html, // html body
    });

    return info;
};

module.exports = sendMail;
