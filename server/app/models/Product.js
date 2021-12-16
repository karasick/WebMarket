const sequelize = require('../../db')
const {INTEGER, STRING, FLOAT} = require('sequelize')

const Product = sequelize.define('product', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    description: {
        type: STRING
    },
    price: {
        type: FLOAT,
        allowNull: false
    },
    rating: {
        type: FLOAT,
        defaultValue: 0
    },
    imageLink: {
        type: STRING,
        allowNull: false
    }
})

module.exports = Product