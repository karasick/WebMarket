const sequelize = require('../../db')
const {INTEGER, STRING} = require('sequelize')
const Product = require("./Product");
const Brand = require("./Brand");
const BrandCategory = require("./BrandCategory");

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

// Category.associate = function () {
//     Category.hasMany(Product, {foreignKey: 'id', sourceKey: 'userId'})
//     Category.belongsToMany(Brand, {through: BrandCategory})
// }

module.exports = Category