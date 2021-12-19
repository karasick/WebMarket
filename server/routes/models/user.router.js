const Router = require('express')
const userController = require('../../app/controllers/user.controller')

const router = new Router()

router.get('/', userController.getAll)

router.get('/:id', userController.getOne)

module.exports = router