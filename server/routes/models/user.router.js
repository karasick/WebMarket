const Router = require('express')
const userController = require('../../app/controllers/user.controller')
const authMiddleware = require('../../app/middleware/auth.middleware')
const roleMiddleware = require('../../app/middleware/role.middleware')

const router = new Router()

router.get('/', [
    authMiddleware, roleMiddleware('admin')
], userController.getAll)

router.get('/:id', [
    authMiddleware, roleMiddleware('admin')
], userController.getOne)

module.exports = router