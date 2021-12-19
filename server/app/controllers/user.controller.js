const userService = require("../services/user.service");

class UserController {
    async getAll(req, res, next) {
        try {
            const users = await userService.getAll()

            res.json(users)
        }
        catch (e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const user = await userService.getOne(id)

            res.json(user)
        }
        catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()