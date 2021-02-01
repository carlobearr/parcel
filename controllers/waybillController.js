const waybillModel = require('../models/Waybill');

function databasifyWaybill(details, userId) {
    details.userId = userId;
    if (!details.consigneeWillReceive) {
        details.consigneeWillReceive = false;
    }

    return details;
}


exports.createWaybill = async(req, res) => {
    const waybill = databasifyWaybill(req.body, req.session.user.gId);

    const waybillMongo = new waybillModel(waybill);

    const result = await waybillMongo.save();

    if (result.userId) {
        res.json({ success: result });
    } else {
        res.json({ err: 'failed to save' });
    }
}

exports.getWaybillList = async(req, res) => {
    const result = await waybillModel.find({ userId: req.session.user.gId });

    res.json({ list: result });
}

exports.editWaybill = async(req, res) => {
    const waybill = databasifyWaybill(req.body, req.session.user.gId);

    const result = await waybillModel.updateOne({ _id: waybill._id }, waybill);

    res.json({ result });
}