const Router = require('express')
const brandController = require('../../app/controllers/brand.controller')
const authMiddleware = require('../../app/middleware/auth.middleware')
const roleMiddleware = require('../../app/middleware/role.middleware')

const router = new Router()

router.get('/', brandController.getAll)

router.post('/', [
    authMiddleware, roleMiddleware('admin')
], brandController.create)

module.exports = router