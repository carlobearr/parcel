const express = require('express');
const adminController = require('../controllers/adminController');
const path = require('path');

const router = express.Router();

router.get('/', adminController.getIndex);

module.exports = router;