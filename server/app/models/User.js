const sequelize = require('../../db')
const {INTEGER, STRING} = require('sequelize')
const UserBasket = require("./UserBasket");
const ProductRating = require("./ProductRating");

const User = sequelize.define('user', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: STRING,
        unique: true
    },
    password: {
        type: STRING
    },
    role: {
        type: STRING,
        defaultValue: "user"
    }
})

// User.associate = function () {
//     User.hasOne(UserBasket)
//     User.hasMany(ProductRating)
// }

module.exports = User