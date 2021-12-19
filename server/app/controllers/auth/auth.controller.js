const authService = require('../../services/auth.service')

class AuthController {
    async check(req, res, next) {
        try {
            const user = req.user;
            const token = await authService.check(user)

            res.json(token)
        }
        catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const token = await authService.login(email, password)

            res.json(token)
        }
        catch (e) {
            next(e)
        }
    }

    async register(req, res, next) {
        try {
            const {email, password, role} = req.body
            const token = await authService.register(email, password, role)

            res.json(token)
        }
        catch (e) {
            next(e)
        }
    }
}

module.exports = new AuthController()