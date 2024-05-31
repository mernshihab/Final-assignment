const nodemailer = require('nodemailer');
const config = require('../../config');

exports.sendMail = async (to, subject, html) => {
    try {
        const transporter = nodemailer.createTransport({
            host: config.emailHost,
            port: config.emailPort,
            secure: false,
            auth: {user: config.emailUser, pass: config.emailPass},
            tls: {rejectUnauthorized: false}
        });

        const emailOption = {
            from: config.emailUser,
            to,
            subject,
            html
        }

        const data = await transporter.sendMail(emailOption);
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}