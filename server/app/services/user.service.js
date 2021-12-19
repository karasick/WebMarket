const User = require('../models/User')

class UserService {
    async getAll() {
        const users = await User.findAll()
        return users;
    }

    async getOne(id) {
        const user = await User.findOne({where:{id}})
        return user;
    }
}

module.exports = new UserService()