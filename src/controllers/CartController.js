const {
    createCartService,
    readCartsService,
    removeCartService
} = require('../services/CartServices');

exports.createCart = async (req, res) => {
    try {
        const data = await createCartService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}

exports.readCarts = async (req, res) => {
    try {
        const data = await readCartsService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}

exports.removeCart = async (req, res) => {
    try {
        const data = await removeCartService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}