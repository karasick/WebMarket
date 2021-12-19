const sequelize = require('../../db')
const {INTEGER} = require('sequelize')
const Product = require("./Product");
const UserBasket = require("./UserBasket");

const BasketProduct = sequelize.define('basket_product', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

// BasketProduct.belongsTo(Product)
// BasketProduct.belongsTo(UserBasket)

module.exports = BasketProduct