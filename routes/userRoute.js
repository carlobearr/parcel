const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/api/login', userController.loginUser);

router.delete('/api/logout', userController.logoutUser);

router.get('/api/getSession', userController.getSessionUser);

module.exports = router;