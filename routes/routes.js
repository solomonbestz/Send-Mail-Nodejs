const router = require('express').Router()
const { signup } = require('../controller/appController.js')


// HTTP Request
router.post('/user/signup', signup)

module.exports = router