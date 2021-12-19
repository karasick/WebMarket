const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const UserBasket = require('../models/UserBasket')
const ApiError = require("../exceptions/api.error");
const tokenService = require('./token.service')

class AuthService {
    async check(user) {
        const token = tokenService.generateAccess({id: user.id, email: user.email, role: user.role})

        return {token};
    }

    async login(email, password) {
        const user = await User.findOne({where: {email}})
        if(!user) {
            throw ApiError.badRequest("User with provided 'email' is not registered.")
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password)
        if(!isPasswordValid) {
            throw ApiError.unauthorized("Incorrect password.")
        }

        const token = tokenService.generateAccess({id: user.id, email: user.email, role: user.role})

        return {token};

    }

    async register(email, password, role) {
        if(!email || !password) {
            throw ApiError.badRequest('Undefined email or password.')
        }

        const candidate = await User.findOne({where: {email}})
        if(candidate) {
            throw ApiError.badRequest("User with provided 'email' already registered.")
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword, role})
        const userBasket = await UserBasket.create({userId: user.id})

        const token = tokenService.generateAccess({id: user.id, email: user.email, role: user.role})

        return {token};
    }
}

module.exports = new AuthService()