const express = require('express');
const authHandler = require('../users/authHandler');

const router = express.Router();
router.post('/signup', authHandler.signUp);

module.exports = router;