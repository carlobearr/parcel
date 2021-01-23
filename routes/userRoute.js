const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/login', userController.loginUser);

router.delete('/logout', userController.logoutUser);

router.get('/getSession', userController.getSessionUser);

router.post('/edit', userController.editUser);

module.exports = router;