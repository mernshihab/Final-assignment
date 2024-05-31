const ProductDetailsModel = require('../models/ProductDetailsModel');

exports.productDetailService = async (req) => {
    try {
        const productID = req.params.ProductID;
        const data = await ProductDetailsModel.find({productID});
        return {status: 'success', data};
    } catch (e) {
        return {status: 'error', message: e.toString()};
    }
}