const express = require('express')
const router = express.Router()

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const reportController = require('../controllers/reportController')

router.post('/', upload.single('image'), reportController.createReport)

router.get('/', reportController.getReports)

module.exports = router