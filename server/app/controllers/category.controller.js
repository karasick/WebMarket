const categoryService = require('../services/category.service')

class CategoryController {
    async getAll(req, res, next) {
        try {
            const categories = await categoryService.getAll()
            res.json(categories)
        }
        catch (e) {
            next(e)
        }
    }

    async create(req, res, next) {
        try {
            const {name} = req.body
            const category = await categoryService.create(name)
            res.json(category)
        }
        catch (e) {
            next(e)
        }
    }
}

module.exports = new CategoryController()