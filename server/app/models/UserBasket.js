const sequelize = require('../../db')
const {INTEGER} = require('sequelize')

const UserBasket = sequelize.define('user_basket', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

module.exports = UserBasket