const Router = require('express')
const productController = require('../../app/controllers/product.controller')
const authMiddleware = require('../../app/middleware/auth.middleware')
const roleMiddleware = require('../../app/middleware/role.middleware')

const router = new Router()

router.get('/', productController.getAll)

router.post('/', [
    authMiddleware, roleMiddleware('admin')
], productController.create)

router.get('/:id', productController.getOne)

module.exports = router