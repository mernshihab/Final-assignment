const mongoose = require('mongoose');
const schema = mongoose.Schema({
    categoryName: {type: String, required: true},
    categoryImg: {type: String, required: true}
}, {timestamps: true, versionKey: false});
const model = mongoose.model('categories', schema);
module.exports = model;