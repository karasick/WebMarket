const Router = require('express')
const authController = require('../../app/controllers/auth/auth.controller')

const router = new Router()

router.get('/', authController.check)

router.post('/login', authController.login)
router.post('/register', authController.register)

module.exports = router