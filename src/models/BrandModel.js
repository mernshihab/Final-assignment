const mongoose = require('mongoose');
const schema = mongoose.Schema({
    brandName: {type: String, required: true},
    brandImg: {type: String, required: true}
}, {timestamps: true, versionKey: false});
const model = mongoose.model('brands', schema);
module.exports = model;