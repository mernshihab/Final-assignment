const {
    sendOTPService,
    verifyOTPService
} = require('../services/UserServices');

exports.sendOTP = async (req, res) => {
    try {
        const data = await sendOTPService(req);
        return res.json(data);
    } catch (e) {
        return res.json({status: 'error', message: e.toString()});
    }
}

exports.verifyOTP = async (req, res) => {
    try {
        const data = await verifyOTPService(req);
        if (data['status'] === 'success') {
            const cookieOption = {
                expires: new Date(Date.now() + 24 * 6060 * 1000),
                httpOnly: false,
            }
            res.cookie('token', data['token'], cookieOption);
            res.json(data);
        }else {
            res.json(data);
        }
    } catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}

exports.logout = async (req, res) => {
    try {
        const expireCookie = {
            expires: new Date(Date.now() -24 * 6060 * 1000),
            httpOnly: false,
        }

        res.cookie('token', '', expireCookie);
        return res.json({status: 'success', message: 'logged out successfully.'});
    }catch (e) {
        return res.json({status: 'error', message: e.toString()});
    }
}