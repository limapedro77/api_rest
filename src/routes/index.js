const express = require('express')
const homeRoute = require('./homeRoute')

const router = express.Router()

router.use('/', homeRoute)

module.exports = router