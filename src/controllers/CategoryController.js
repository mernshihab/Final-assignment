const {categoriesService} = require('../services/CategoryServices');

exports.categories = async (req, res) => {
    try {
        const data = await categoriesService();
        res.json(data);
    } catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}