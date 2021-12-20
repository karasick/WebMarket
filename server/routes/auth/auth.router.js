const Router = require('express')
const authController = require('../../app/controllers/auth/auth.controller')
const authMiddleware = require('../../app/middleware/auth.middleware')
const authValidator = require('../../app/validators/auth.validator')

const router = new Router()

// router.get('/', authMiddleware, authController.check)

router.post('/login', authValidator(), authController.login)

router.post('/logout', authController.logout)

router.post('/register', authValidator(), authController.register)

router.get('/refresh', authController.refresh)

module.exports = router