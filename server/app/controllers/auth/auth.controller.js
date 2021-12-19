const {validationResult} = require('express-validator')

const authService = require('../../services/auth.service')
const ApiError = require('../../exceptions/api.error')

class AuthController {
    async check(req, res, next) {
        try {
            res.json(null)
        }
        catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                throw ApiError.badRequest('Validation error.', errors.array())
            }

            const {email, password} = req.body
            const userData = await authService.login(email, password)

            setRefreshCookie(res, userData.refreshToken)

            res.json(userData)
        }
        catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const token = await authService.logout(refreshToken)

            res.clearCookie('refreshToken')

            res.json(token)
        }
        catch (e) {
            next(e)
        }
    }

    async register(req, res, next) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                throw ApiError.badRequest('Validation error.', errors.array())
            }

            const {email, password, role} = req.body
            const userData = await authService.register(email, password, role)

            setRefreshCookie(res, userData.refreshToken)

            res.json(userData)
        }
        catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await authService.refresh(refreshToken)

            setRefreshCookie(res, userData.refreshToken)

            res.json(userData)
        }
        catch (e) {
            next(e)
        }
    }
}

function setRefreshCookie(res, refreshToken) {
    res.cookie('refreshToken', refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
}

module.exports = new AuthController()