const sequelize = require('../../db')
const {INTEGER, FLOAT} = require('sequelize')

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

module.exports = ProductRating