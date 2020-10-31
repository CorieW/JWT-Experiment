const express = require('express')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

dotenv.config()
const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
const port = process.env.PORT || 3001

const db = require('./config/database')

app.use('/api/register', require('./api/register'))
app.use('/api/login', require('./api/login'))
app.use('/api/users', require('./api/users'))

app.listen(port)