const sequelize = require('../../db')
const {INTEGER} = require('sequelize')

const BrandCategory = sequelize.define('brand_category', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

module.exports = BrandCategory