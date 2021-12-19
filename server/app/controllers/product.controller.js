const productService = require('../services/product.service')
const ApiError = require("../exceptions/api.error");

class ProductController {
    async getAll(req, res, next) {
        try {
            const searchQuery = req.query
            const devices = await productService.getAll(searchQuery)

            res.json(devices)
        }
        catch (e) {
            next(e)
        }
    }

    async create(req, res, next) {
        try {
            const product = req.body
            const {image} = req.files
            const newProduct = await productService.create(product, image)

            res.json(newProduct)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const product = await productService.getOne(id)

            res.json(product)
        }
        catch (e) {
            next(e)
        }
    }
}

module.exports = new ProductController()