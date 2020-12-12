const express = require('express');
const addressController = require('../controllers/addressController');

const router = express.Router();

router.post('/create', addressController.createAddress);

router.get('/list', addressController.getAddressList);

module.exports = router;