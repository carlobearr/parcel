const deliveryModel = require('../models/Delivery');
const addressModel = require('../models/Address');
const waybillModel = require('../models/Waybill');
const trackerModel = require('../models/Tracker');

//converts json values to database model format
async function databasify(deliveryDetails, userId) {
    const date = new Date();

    //set values
    date.setFullYear(deliveryDetails.year)
    date.setMonth(deliveryDetails.month - 1);
    date.setDate(deliveryDetails.day);

    deliveryDetails['date'] = date; //save json with new date

    //delete individual date values
    delete deliveryDetails.year;
    delete deliveryDetails.month;
    delete deliveryDetails.day;

    deliveryDetails['userId'] = userId;

    //get address object then set senderAddress based on address id
    const address = await addressModel.findOne({ userId: userId, name: deliveryDetails.senderAddress });
    if (address !== null) {
        deliveryDetails['senderAddress'] = address._id; //set address id
    } else {
        return { err: 'Error retrieving sender address' };
    }

    //temporaries
    //Add recipient Id linking here - same as senderAddress
    const recAddress = await waybillModel.findOne({ userId: userId, recipientName: deliveryDetails.recipientAddress });

    if (recAddress !== null) {
        deliveryDetails['recipientAddress'] = recAddress._id;
    } else {
        return { err: 'Error retrieveing recipient address' };
    }

    //generate tracking number
    const userDeliveries = await deliveryModel.find({ userId: userId });
    const track1 = userId.substr(-3);
    const track2 = () => {
        var count = userDeliveries.length.toString();
        while (count.length < 3) {
            count = 0 + count;
        }
        return count;
    }

    //final tracking number
    deliveryDetails['trackingNumber'] = 'TRCK-' + track1 + '-' + track2();

    //create tracker
    const currDate = new Date();
    const initialTrack = { title: 'Delivery Pending', date: currDate.toString() };
    const tracker = new trackerModel({ trackingNumber: deliveryDetails.trackingNumber, status: [JSON.stringify(initialTrack)] });
    tracker.save();

    //add itemPhoto here

    return deliveryDetails;

}

exports.createDelivery = async(req, res) => {
    const deliveryDetails = await databasify(req.body, req.session.user.gId);

    //error converting form to Delivery model
    if (deliveryDetails.err) {
        res.json(deliveryDetails.err);
    } else {
        const delivery = new deliveryModel(deliveryDetails);

        const response = await delivery.save();

        if (response.trackingNumber) {
            res.json({ saved: response.trackingNumber });
        } else {
            res.json({ err: 'Error booking delivery.' });
        }
    }

}

exports.getDeliveryList = async({ session }, res) => {
    const list = await deliveryModel.find({ userId: session.user.gId }).populate(['recipientAddress', 'senderAddress']);

    if (list.length > 0) {
        res.json(list);
    } else {
        res.json(null);
    }
}