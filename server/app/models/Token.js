const sequelize = require('../../db')
const {INTEGER, STRING} = require('sequelize')
const User = require("./User");

const Token = sequelize.define('token', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    refreshToken: {
        type: STRING
    }
})

// Token.associate = function () {
//     Token.belongsTo(User)
// }

module.exports = Token