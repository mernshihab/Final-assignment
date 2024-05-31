const UserModel = require('../models/UserModel');
const {sendMail} = require('../utilities/EmailUtility');
const {createJWT} = require("../utilities/TokenUtility");

exports.sendOTPService = async (req) => {
    try {
        const OTPCode = Math.floor(100000 + Math.random() * 900000);
        const to = req.params.email;
        const subject = 'User login OTP.';
        const html = `Your verification OTP is ${OTPCode}.`;
        const sendOTP = await sendMail(to, subject, html);
        const data = await UserModel.updateOne({email: to}, {email: to, otp: OTPCode}, {upsert: true});
        return data;
    } catch (e) {
        return {status: 'error', message: e.toString()};
    }
}

exports.verifyOTPService = async (req) => {
    try {
        const email = req.params.email;
        const otp = req.params.otp;
        const user = await UserModel.findOne({email});
        const userID = user['_id'];
        const databaseOTP = user['otp'];
        if (databaseOTP !== otp) {
            return {status: 'error', message: 'email or OTP doesn\'t matched.'};
        } else {
            const updateOTPStatus = await UserModel.updateOne({email, otp}, {otp: ''});
            const data = createJWT(email, userID);
            return {status: 'success', token: data};
        }
    } catch (e) {
        return {status: 'error', message: e.toString()};
    }
}