const express = require('express')
const path = require('path')
require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.use('/', express.static(path.join(__dirname, '../deployment/client/index.html')))

app.use(express.static(path.join(__dirname, '../deployment/client')))

app.listen(port, () => {
    console.log('Docked at port ' + port)
})