const Router = require('express')
const router = new Router()
const authRouter = require('./auth/auth.router')
const brandRouter = require('./models/brand.router')
const categoryRouter = require('./models/category.router')
const productRouter = require('./models/product.router')
const userRouter = require('./models/user.router')

router.use('/auth', authRouter)

router.use('/brands', brandRouter)
router.use('/categories', categoryRouter)
router.use('/products', productRouter)
router.use('/users', userRouter)

module.exports = router