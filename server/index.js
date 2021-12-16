require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
const relations = require('./app/relations')
// const BasketProduct = require('./app/models/BasketProduct')
// const Brand = require('./app/models/Brand')
// const BrandCategory = require('./app/models/BrandCategory')
// const Category = require('./app/models/Category')
// const Product = require('./app/models/Product')
// const ProductRating = require('./app/models/ProductRating')
// const ProductSpecification = require('./app/models/ProductSpecification')
// const UserBasket = require('./app/models/UserBasket')
// const User = require('./app/models/User')

const PORT = process.env.PORT

const app = express()

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