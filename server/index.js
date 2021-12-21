require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')
const cookieParser = require('cookie-parser')
const sequelize = require('./db.js')
// const relations = require('./app/models/relations')
const apiRouter = require('./routes/api.router')
const errorHandler = require('./app/middleware/errorHandler.middleware')

const PORT = process.env.PORT

const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

app.use('/api', apiRouter)

app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}

start()