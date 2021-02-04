const express = require('express');
const deliveryController = require('../controllers/deliveryController');

const router = express.Router();

router.post('/create', deliveryController.createDelivery);

router.get('/getList', deliveryController.getDeliveryList);

module.exports = router;