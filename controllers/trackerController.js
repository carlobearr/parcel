const trackerModel = require('../models/Tracker');


exports.getTracker = async(req, res) => {
    const tracker = await trackerModel.findOne({ trackingNumber: req.params.trackingNumber });
    res.json({ tracker });
}