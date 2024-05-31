const {
    saveWishService,
    readWishService,
    removeWishService
} = require('../services/WishServices');

exports.saveWish = async (req, res) => {
    try {
        const data = await saveWishService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}

exports.readWishes = async (req, res) => {
    try {
        const data = await readWishService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}

exports.removeWish = async (req, res) => {
    try {
        const data = await removeWishService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}