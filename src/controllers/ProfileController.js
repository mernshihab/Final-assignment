const {
    saveProfileService,
    readProfileService
} = require('../services/ProfileServices');

exports.createProfile = async (req, res) => {
    try {
        const data = await saveProfileService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}

exports.readProfile = async (req, res) => {
    try {
        const data = await readProfileService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}

exports.updateProfile = async (req, res) => {
    try {
        const data = await saveProfileService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}