const express = require('express');
const authHandler = require('../users/authHandler');

const router = express.Router();
router.post('/signup', authHandler.signUp);
router.post('/login', authHandler.logIn);

module.exports = router;