const express = require('express')
const apiCtrl = require('../controllers/api')
const router = express.Router()
//////

router.get('/test', apiCtrl.test)

module.exports = router