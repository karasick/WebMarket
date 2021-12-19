const sequelize = require('../../db')
const {INTEGER, STRING, FLOAT} = require('sequelize')
const BasketProduct = require("./BasketProduct");
const ProductRating = require("./ProductRating");
const ProductSpecification = require("./ProductSpecification");
const Brand = require("./Brand");
const Category = require("./Category");

const Product = sequelize.define('product', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    description: {
        type: STRING
    },
    price: {
        type: FLOAT,
        allowNull: false
    },
    rating: {
        type: FLOAT,
        defaultValue: 0
    },
    image: {
        type: STRING,
        allowNull: false
    }
})

// Product.hasMany(BasketProduct)
// Product.hasMany(ProductRating)
// Product.hasMany(ProductSpecification)
// Product.belongsTo(Brand)
// Product.belongsTo(Category)

module.exports = Product