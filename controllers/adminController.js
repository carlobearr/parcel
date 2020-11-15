const Note = require('../models/Note');
const connection = require('../db');

exports.getIndex = async(req, res) => {
    await connection();
    const notes = await Note.find();

    try {
        // res.send({ v: 2, notes });
        res.json({ v: 2, notes });
    } catch (error) {
        console.log(error);
    }
};

exports.getDashboard = async(req, res) => {

}