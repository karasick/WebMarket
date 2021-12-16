const sequelize = require('../../db')
const {INTEGER, STRING} = require('sequelize')

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

module.exports = User