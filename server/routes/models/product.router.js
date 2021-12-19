const Router = require('express')
const productController = require('../../app/controllers/product.controller')

const router = new Router()

router.get('/', productController.getAll)
router.post('/', productController.create)

router.get('/:id', productController.getOne)

module.exports = router