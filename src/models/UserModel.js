const mongoose = require('mongoose');
const schema = mongoose.Schema({
    email: {type: String, required: true},
    otp: {type: String, required: true}
}, {timestamps: true, versionKey: false});
const model = mongoose.model('users', schema);
module.exports = model;