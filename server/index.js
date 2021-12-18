require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
const relations = require('./app/relations')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./app/middleware/errorHandler.middleware')

const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

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