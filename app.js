const express = require('express')
const routes = require('./src/routes')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

module.exports = app