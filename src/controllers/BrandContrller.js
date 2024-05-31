const {brandsServices} = require('../services/BrandServices');

exports.brands = async (req, res) => {
    try {
        const data = await brandsServices();
        res.json(data);
    } catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}