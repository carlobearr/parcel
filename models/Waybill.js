const mongoose = require('mongoose');

const waybillSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    recipientName: { type: String, required: true },
    recipientContact: { type: String, required: true },
    recipientAddress: { type: String, required: true },
    addressDetails: { type: String },
    consigneeWillReceive: { type: Boolean, required: true },
    consigneeName: { type: String },
    consigneeContact: { type: String }
});

module.exports = mongoose.model('Waybill', waybillSchema);