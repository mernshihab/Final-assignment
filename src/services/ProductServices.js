const ProductModel = require('../models/ProductModel');

exports.productsByBrandService = async (req) => {
    try{
        const brandID = req.params.BrandID;
        const data = await ProductModel.find({brandID});
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}

exports.productsByCategoryService = async (req) => {
    try{
        const categoryID = req.params.CategoryID;
        const data = await ProductModel.find({categoryID});
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}

exports.similarProductsService = async (req) => {
    try{
        const categoryID = req.params.CategoryID;
        const data = await ProductModel.find({categoryID});
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}

exports.productsByKeywordService = async (req) => {
    try{
        const keyword = req.params.Keyword;
        const regex = {$regex: keyword, $options: 'i'}
        const searchTerm = [{title: regex}, {shortDes: regex}]
        const searchOr = {$or: searchTerm};
        const match = {$match: searchOr};
        const data = await ProductModel.aggregate([
            match
        ]);
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}

exports.productsByRemarkService = async (req) => {
    try{
        const remark = req.params.Remark;
        const data = await ProductModel.find({remark});
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}