const ProfileModel = require('../models/ProfileModel');

exports.saveProfileService = async(req) => {
    try {
        const email = req.headers.email;
        const userID = req.headers.userID;
        req.body.email = email;
        req.body.userID = userID;
        let reqBody = req.body;
        const data = await ProfileModel.updateOne({email, userID}, {$set: reqBody}, {upsert: true});
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}

exports.readProfileService = async(req) => {
    try {
        const email = req.headers.email;
        const userID = req.headers.userID;
        const data = await ProfileModel.findOne({email, userID});
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}