const brandService = require("../services/brand.service");

class BrandController {
    async getAll(req, res, next) {
        try {
            const brands = await brandService.getAll()
            res.json(brands)
        }
        catch (e) {
            next(e)
        }
    }

    async create(req, res, next) {
        try {
            const {name} = req.body
            const brand = await brandService.create(name)
            res.json(brand)
        }
        catch (e) {
            next(e)
        }
    }
}

module.exports = new BrandController()