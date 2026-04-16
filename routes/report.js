const express = require('express')
const router = express.Router()

const multer = require('multer')
const multerS3 = require('multer-s3')

const s3 = require('../config/s3')

const reportController = require('../controllers/reportController')

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'ecohealth-images-falih',
        acl: 'public-read',
        key: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
})

router.post('/', upload.single('image'), reportController.createReport)

router.get('/', reportController.getReports)

module.exports = router