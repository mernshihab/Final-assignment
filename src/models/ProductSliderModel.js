const mongoose = require('mongoose');
const schema = mongoose.Schema({
    title: {type: String, required: true},
    des: {type: String, required: true},
    price: {type: Number, required: true},
    img: {type: String, required: true},
    productID: {type: mongoose.Schema.Types.ObjectId, required: true}
}, {timestamps: true, versionKey: false});
const model = mongoose.model('productsliders', schema);
module.exports = model;