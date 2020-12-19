const express = require('express');
const addressController = require('../controllers/addressController');

const router = express.Router();

router.post('/create', addressController.createAddress);

router.post('/edit/:prevAddressName', addressController.editAddress); //edit address in database

router.get('/list', addressController.getAddressList);

router.get('/edit/:addressName', addressController.getAddress); //get content of address to edit

router.delete('/delete/:addressName', addressController.deleteAddress);

module.exports = router;