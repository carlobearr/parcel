const trackerModel = require('../models/Tracker');


exports.getTracker = async(req, res) => {
    const tracker = await trackerModel.findOne({ trackingNumber: req.params.trackingNumber });

    const newstat = tracker.status.map((stat) => {
        var json = JSON.parse(stat);
        json.date = Date.parse(json.date);
        return json;
    })

    res.json({ tracker });
}