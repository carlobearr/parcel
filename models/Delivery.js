const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    userId: { type: String, required: true },
    trackingNumber: { type: String, required: true },
    senderAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true },
    recipientAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'Waybill', required: true },
    parcelSize: { type: String, required: true },
    date: { type: Date, required: true },
    cod: { type: Boolean, required: true },
    itemName: { type: String, required: true },
    itemPhoto: { type: String },
    itemPrice: { type: Number },
    deliveryFee: { type: Number, required: true }
});

module.exports = mongoose.model('Delivery', deliverySchema);