const express = require('express');
const deliveryController = require('../controllers/deliveryController');

const router = express.Router();

router.post('/create', deliveryController.createDelivery);

module.exports = router;