const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const db = require('./db')

const createBookRouter = require('./routes/create_books')

const app = express()

app.use(bodyParser.json())

app.use(cors())

app.use('/api',createBookRouter)

const port = process.env.PORT || 5000

app.listen(port,() => {
    console.log(`server is Running on - http://localhost:${port}`)
})