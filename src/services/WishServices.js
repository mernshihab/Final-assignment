const WishModel = require('../models/WishModel');
const mongoose = require('mongoose');
const objectID = mongoose.Types.ObjectId;

exports.saveWishService = async (req) => {
    try{
        const userID = req.headers['userID'];
        const productID = req.body['productID'];
        const data = await WishModel.updateOne({userID, productID}, {$set: {userID, productID}}, {upsert: true});
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}

exports.readWishService = async (req) => {
    try{
        const userID = new objectID(req.headers.userID);
        const match = {$match: {userID}};
        const joinProduct = {$lookup: {from: 'products', localField: 'productID', foreignField: '_id', as: 'product'}};
        const unwindProduct = {$unwind: '$product'};
        const data = await WishModel.aggregate([
            match,
            joinProduct,
            unwindProduct
        ]);
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}

exports.removeWishService = async (req) => {
    try{
        const userID = req.headers['userID'];
        const productID = req.body['productID'];
        const data = await WishModel.deleteOne({userID, productID});
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}
