const Router = require('express')
const categoryController = require('../../app/controllers/category.controller')

const router = new Router()

router.get('/', categoryController.getAll)
router.post('/', categoryController.create)

module.exports = router