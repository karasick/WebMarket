const sequelize = require('../../db')
const {INTEGER, STRING} = require('sequelize')
const Product = require("./Product");
const Category = require("./Category");
const BrandCategory = require("./BrandCategory");

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

// Brand.hasMany(Product)
// Brand.belongsToMany(Category, {through: BrandCategory})

module.exports = Brand