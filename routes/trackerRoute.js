const express = require('express');
const trackerController = require('../controllers/trackerController');

const router = express.Router();

router.get('/:trackingNumber', trackerController.getTracker);


module.exports = router;