const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authCtrl');

router.post('/login', authCtrl.loginAuth);

module.exports = router;
