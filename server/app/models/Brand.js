const sequelize = require('../../db')
const {INTEGER, STRING} = require('sequelize')

const Brand = sequelize.define('brand', {
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

module.exports = Brand