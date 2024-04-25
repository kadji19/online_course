const express = require('express')
const router = express.Router()
const categorieCtrl = require('../controllers/categorieCtrl')

router.get('/select',categorieCtrl.getCategory )

module.exports= router
