const sequelize = require('../../db')
const {INTEGER} = require('sequelize')
const User = require("./User");
const BasketProduct = require("./BasketProduct");

const UserBasket = sequelize.define('user_basket', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

// UserBasket.associate = function () {
//     UserBasket.hasMany(BasketProduct)
//     UserBasket.belongsTo(User)
// }

module.exports = UserBasket