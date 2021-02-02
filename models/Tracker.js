const { json } = require('express');
const mongoose = require('mongoose');
const trackerSchema = new mongoose.Schema({
    trackingNumber: { type: String, required: true },
    status: { type: [String] }
});
module.exports = mongoose.model('Tracker', trackerSchema);