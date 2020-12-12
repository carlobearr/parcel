const mongoose = require('mongoose');
const addressSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    completeAddress: { type: String, required: true },
    details: { type: String }
});
module.exports = mongoose.model('Address', addressSchema);