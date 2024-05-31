const ReviewModel = require('../models/ReviewModel');

exports.reviewsService = async (req) => {
    try {
        const productID = req.params.ProductID;
        const data = await ReviewModel.find({productID});
        return {status: 'success', data};
    } catch (e) {
        return {status: 'error', message: e.toString()};
    }
}