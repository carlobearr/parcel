const deliveryModel = require('../models/Delivery');
const addressModel = require('../models/Address');

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

    deliveryDetails['trackingNumber'] = 'TRCK-001-NUM';
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