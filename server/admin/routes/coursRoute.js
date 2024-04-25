const express = require('express')
const router = express.Router()
const coursCtrl = require('../controllers/coursCtrl')
const verifyToken = require('../../middlewares/verifyToken')
const verifyAdminToken = require('../../middlewares/verifyAdminToken')
const multer = require('../../middlewares/multer-config')

router.post('/categorieAllCourse',verifyToken,coursCtrl.getCoursesByCategory);

router.post('/add', verifyAdminToken,multer,coursCtrl.addStudentCours)

module.exports= router
