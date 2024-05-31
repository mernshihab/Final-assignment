const CategoryModel = require('../models/CategoryModel');

exports.categoriesService = async () => {
    try {
        const data = await CategoryModel.find();
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}