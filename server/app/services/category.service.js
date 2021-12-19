const Category = require('../models/Category')

class CategoryService {
    async getAll() {
        const categories = await Category.findAll()
        return categories;
    }

    async create(name) {
        const newCategory = await Category.create({name})
        return newCategory;
    }
}

module.exports = new CategoryService()