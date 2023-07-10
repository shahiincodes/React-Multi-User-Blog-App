const express = require('express')
const registerUser = require('../Controllers/register')
const router = express.Router()

router.post('/register',registerUser)

module.exports = router