const express = require('express');
const {
    Login,
    Signup,
} = require('../controller/AuthController');
const router = express.Router();

//login
router.post('/login', Login);

//signup
router.post('/signup', Signup);

module.exports = router;