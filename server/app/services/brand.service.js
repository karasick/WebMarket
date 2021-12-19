const Brand = require('../models/Brand')

class BrandService {
    async getAll() {
        const brands = await Brand.findAll()
        return brands;
    }

    async create(name) {
        const newBrand = await Brand.create({name})
        return newBrand;
    }
}

module.exports = new BrandService()