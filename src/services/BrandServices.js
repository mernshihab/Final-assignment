const BrandModel = require('../models/BrandModel');

exports.brandsServices = async () => {
    try {
        const data = await BrandModel.find();
        return {status: 'success', data};
    }catch (e) {
        return {status: 'error', message: e.toString()};
    }
}