const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.enable('trust proxy')
app.use(cors())
app.use(bodyParser.json())

module.exports = app
