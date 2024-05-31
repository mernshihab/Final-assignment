const ProductSliderModel = require('../models/ProductSliderModel');

exports.productSlidersService = async () => {
    try {
        const data = await ProductSliderModel.find();
        return {status: 'success', data};
    } catch (e) {
        return {status: 'error', message: e.toString()};
    }
}