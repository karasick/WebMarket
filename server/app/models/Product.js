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
        type: STRING
    }
})

// Product.associate = function () {
//     Product.hasMany(BasketProduct)
//     Product.hasMany(ProductRating)
//     Product.hasMany(ProductSpecification, {as: "specifications"})
//
//     Product.belongsTo(Brand, {foreignKey: 'id'})
//     Product.belongsTo(Category, {foreignKey: 'id'})
// }

module.exports = Product