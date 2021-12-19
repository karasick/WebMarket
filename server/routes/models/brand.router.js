const Router = require('express')
const brandController = require('../../app/controllers/brand.controller')

const router = new Router()

router.get('/', brandController.getAll)
router.post('/', brandController.create)

module.exports = router