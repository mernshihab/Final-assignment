const {productDetailService} = require('../services/ProductDetailServices');

exports.productDetail = async (req, res) => {
    try {
        const data = await productDetailService(req);
        res.json(data);
    } catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}