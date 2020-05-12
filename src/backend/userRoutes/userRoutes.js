const express = require('express');
const authHandler = require('../users/authHandler');
const passport = require('passport');

const router = express.Router();
router.post('/signup', authHandler.signUp);
router.post('/login', passport.authenticate('local', {
        successFlash: 'Success Login',
        failureRedirect: '/error',
        failureFlash: 'Invalid username or password.' })
);

module.exports = router;