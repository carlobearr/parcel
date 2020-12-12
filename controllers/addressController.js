const addressModel = require('../models/Address');


exports.createAddress = async(req, res) => {
    var addressDetails = req.body;
    addressDetails['userId'] = req.session.user.gId;
    const str = JSON.stringify(addressDetails);
    addressDetails = JSON.parse(str.replace('addressName', 'name'));

    const address = new addressModel(addressDetails);
    if (address) {
        const response = await address.save();
        if (response._id) {
            res.status(200).json({ message: "saved" });
        } else {
            res.status(200).json({ message: "error" });
        }
    }
}

exports.deleteAddress = async(req, res) => {

}

exports.getAddressList = async(req, res) => {
    const addressList = await addressModel.find({ userId: req.session.user.gId });

    res.json({ list: addressList });
}

exports.getAddress = async(req, res) => {

}