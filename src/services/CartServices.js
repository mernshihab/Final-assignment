const CartModel = require('../models/CartModel');
const mongoose = require('mongoose');
const objectID = mongoose.Types.ObjectId;
exports.createCartService = async (req) => {
    try {
        const userID = req.headers.userID;
        const reqBody = req.body;
        reqBody.userID = userID;
        const data = await CartModel.create(reqBody);
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}

exports.readCartsService = async (req) => {
    try {
        const userID = new objectID(req.headers.userID);
        const match = {$match: {userID}};
        const joinProduct = {$lookup: {from: 'products', localField: 'productID', foreignField: '_id', as: 'product'}};
        const unwindProduct = {$unwind: '$product'};
        const data = await CartModel.aggregate([
            match,
            joinProduct,
            unwindProduct
        ]);
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}

exports.removeCartService = async (req) => {
    try {
        const userID = req.headers.userID;
        const productID = req.body.productID;
        const data = await CartModel.deleteOne({userID, productID});
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}