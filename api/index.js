const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
const sendMail = require('./routes/sendMail.js')
app.use(sendMail)
module.exports = app
