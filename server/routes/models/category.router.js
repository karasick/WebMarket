const Router = require('express')
const categoryController = require('../../app/controllers/category.controller')
const authMiddleware = require('../../app/middleware/auth.middleware')
const roleMiddleware = require('../../app/middleware/role.middleware')

const router = new Router()

router.get('/', categoryController.getAll)

router.post('/', [
    authMiddleware, roleMiddleware('admin')
], categoryController.create)

module.exports = router