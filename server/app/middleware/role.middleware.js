const ApiError = require('../exceptions/api.error')

module.exports = function (role) {
    return function (req, res, next) {
        if(req.method === "OPTIONS") {
            next()
            return;
        }

        const user = req.user
        if(!user) {
            throw ApiError.unauthorized()
        }

        if(user.role !== role) {
            throw ApiError.forbidden()
        }

        next()
    }
}