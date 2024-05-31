const {
    productsByBrandService,
    productsByCategoryService,
    similarProductsService,
    productsByKeywordService,
    productsByRemarkService
} = require('../services/ProductServices');

exports.productsByBrand = async (req, res) => {
    try {
        const data = await productsByBrandService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}

exports.productsByCategory = async (req, res) => {
    try {
        const data = await productsByCategoryService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}

exports.similarProducts = async (req, res) => {
    try {
        const data = await similarProductsService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}

exports.productsByKeyword = async (req, res) => {
    try {
        const data = await productsByKeywordService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}

exports.productsByRemark = async (req, res) => {
    try {
        const data = await productsByRemarkService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}