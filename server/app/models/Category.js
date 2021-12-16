const sequelize = require('../../db')
const {INTEGER, STRING} = require('sequelize')

const Category = sequelize.define('category', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING,
        unique: true
    }
})

module.exports = Category