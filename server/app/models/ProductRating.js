const sequelize = require('../../db')
const {INTEGER, FLOAT} = require('sequelize')
const Product = require("./Product");
const User = require("./User");

const ProductRating = sequelize.define('product_rating', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rate: {
        type: FLOAT,
        allowNull: false
    }
})

// ProductRating.belongsTo(Product)
// ProductRating.belongsTo(User)

module.exports = ProductRating