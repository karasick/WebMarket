const sequelize = require('../../db')
const {INTEGER} = require('sequelize')

const BasketProduct = sequelize.define('basket_product', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

module.exports = BasketProduct