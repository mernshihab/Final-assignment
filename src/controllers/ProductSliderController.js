const {productSlidersService} = require('../services/ProductSliderServices');

exports.productSliders = async (req, res) => {
    try {
        const data = await productSlidersService();
        res.json(data);
    } catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}