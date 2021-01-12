const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    userId: { type: String, required: true },
    trackingNumber: { type: String, required: true },
    senderAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true },
    recipientAddress: { type: String, required: true }, //change recipient address once waybills are up
    parcelSize: { type: String, required: true },
    date: { type: Date, required: true },
    cod: { type: Boolean, required: true },
    itemName: { type: String, required: true },
    itemPhoto: { type: String },
    itemPrice: { type: Number }
});

module.exports = mongoose.model('Delivery', deliverySchema);