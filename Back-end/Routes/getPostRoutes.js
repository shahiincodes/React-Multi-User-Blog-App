const express = require('express')
const router = express.Router()

router.get('/',getPost)
module.exports = router