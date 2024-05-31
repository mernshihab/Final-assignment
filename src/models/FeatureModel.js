const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true}
}, {timestamps: true, versionKey: false});
const model = mongoose.model('features', schema);
module.exports = model;