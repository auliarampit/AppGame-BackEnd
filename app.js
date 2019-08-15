require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.SERVER_PORT || 5000

const nameRouter = require('./src/routers/login')
const scoreRouter = require('./src/routers/score')

app.listen(port, () => {
    console.log('kita menggunakan port: ' + port)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use('/login',nameRouter)
app.use('/score',scoreRouter)