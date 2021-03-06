const sequelize = require('../../db')
const {INTEGER, STRING} = require('sequelize')
const Product = require("./Product");

const ProductSpecification = sequelize.define('product_specification', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: STRING
    },
    description: {
        type: STRING
    }
})

// ProductSpecification.associate = function () {
//     ProductSpecification.belongsTo(Product)
// }

module.exports = ProductSpecification