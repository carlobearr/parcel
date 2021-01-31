const express = require('express');
const waybillController = require('../controllers/waybillController');

const router = express.Router();

router.post('/create', waybillController.createWaybill);

router.get('/list', waybillController.getWaybillList);

router.post('/edit', waybillController.editWaybill);
module.exports = router;