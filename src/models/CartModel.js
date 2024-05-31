const mongoose = require('mongoose');
const schema = mongoose.Schema({
    productID: {type: mongoose.Schema.Types.ObjectId, required: true},
    userID: {type: mongoose.Schema.Types.ObjectId, required: true},
    color: {type: String, required: true},
    price: {type: Number, required: true},
    qty: {type: Number, required: true},
    size: {type: String, required: true}
}, {timestamps: true, versionKey: false});
const model = mongoose.model('carts', schema);
module.exports = model;