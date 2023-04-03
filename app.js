ines (16 sloc)  545 Bytes
 

const express = require('express')
const app = express()
var morgan = require('morgan')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// morgan('tiny')
app.use(morgan('tiny'))
const home = require('./routes/home.route')
// importing routes from routes folder
const user = require('./routes/user')

module.exports = app