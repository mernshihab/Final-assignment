const mongoose = require('mongoose');
const schema = mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, required: true},
    productID: {type: mongoose.Schema.Types.ObjectId, required: true}
}, {timestamps: true, versionKey: false});
const model = mongoose.model('wishes', schema);
module.exports = model;