const express = require('express')
const registerUser = require('../Controllers/register')
const logIn = require('../Controllers/logIn')
const router = express.Router()

router.post('/register',registerUser)
router.post('/logIn',logIn)

module.exports = router