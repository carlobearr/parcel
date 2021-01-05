const addressModel = require('../models/Address');

//converts form values received to database model format
function databasifyAdress(addressDetails, userId) {
    addressDetails['userId'] = userId;
    const str = JSON.stringify(addressDetails);
    addressDetails = JSON.parse(str.replace('addressName', 'name'));

    return addressDetails;
}

exports.createAddress = async(req, res) => {
    const addressDetails = databasifyAdress(req.body, req.session.user.gId);

    const duplicate = await addressModel.find({ name: addressDetails.name, userId: addressDetails.userId });

    if (duplicate.length) {
        res.json({ message: "duplicate" });
    } else {
        const address = new addressModel(addressDetails);

        if (address) {
            const response = await address.save();
            if (response._id) {
                res.json({ message: "saved" });
            } else {
                res.json({ message: "error" });
            }
        }
    }
}

exports.deleteAddress = async(req, res) => {
    const deleteResponse = await addressModel.deleteOne({ userId: req.session.user.gId, name: req.params.addressName });

    if (deleteResponse) {
        res.json({ message: 'deleted' });
    } else {
        res.json({ message: 'error' });
    }
}

//get all address of user
exports.getAddressList = async(req, res) => {
    const addressList = await addressModel.find({ userId: req.session.user.gId });

    res.json({ list: addressList });
}

//get only 1 address
exports.getAddress = async(req, res) => {
    const name = req.params.addressName;

    const address = await addressModel.findOne({ userId: req.session.user.gId, name });

    if (address) {
        res.json({ address });
    } else {
        res.json({ message: "error" });
    }
}

exports.editAddress = async(req, res) => {
    const address = databasifyAdress(req.body, req.session.user.gId);

    const updateResponse = await addressModel.replaceOne({ name: req.params.prevAddressName }, address);

    if (updateResponse) {
        res.json({ message: 'updated' });
    } else {
        res.json({ message: 'error' });
    }

}