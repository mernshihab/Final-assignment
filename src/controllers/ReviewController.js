const {reviewsService} = require('../services/ReviewServices');

exports.reviews = async (req, res) => {
    try {
        const data = await reviewsService(req);
        res.json(data);
    }catch (e) {
        res.json({status: 'error', message: e.toString()});
    }
}