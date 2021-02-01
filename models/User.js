const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    gId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    cellphoneNumber: { type: String }
});
module.exports = mongoose.model('User', userSchema);