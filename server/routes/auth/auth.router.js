const Router = require('express')
const authController = require('../../app/controllers/auth/auth.controller')
const authMiddleware = require('../../app/middleware/auth.middleware')

const router = new Router()

router.get('/', authMiddleware, authController.check)

router.post('/login', authController.login)
router.post('/register', authController.register)

module.exports = router