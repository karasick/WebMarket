const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const UserBasket = require('../models/UserBasket')
const ApiError = require("../exceptions/api.error");
const tokenService = require('./token.service')
const UserDTO = require('../dtos/user.dto')

class AuthService {
    async check(user) {

    }

    async login(email, password) {
        const user = await User.findOne({where: {email}})
        if(!user) {
            throw ApiError.badRequest("User with provided 'email' is not registered.")
        }

        const isPasswordsEqual = bcrypt.compareSync(password, user.password)
        if(!isPasswordsEqual) {
            throw ApiError.unauthorized("Incorrect password.")
        }

        const userDTO = new UserDTO(user)
        const tokens = tokenService.generate({...userDTO})
        await tokenService.save(userDTO.id, tokens.refreshToken)

        return {
            ...tokens
        };

    }

    async logout(refreshToken) {
        const data = await tokenService.remove(refreshToken)

        return data
    }

    async register(email, password, role) {
        if(!email || !password) {
            throw ApiError.badRequest('Undefined email or password.')
        }

        const candidate = await User.findOne({where: {email}})
        if(candidate) {
            throw ApiError.badRequest("User with provided 'email' already registered.")
        }

        const passwordHash = hashPassword(password)
        const user = await User.create({email, password: passwordHash, role})
        const userBasket = await UserBasket.create({userId: user.id})

        const userDTO = new UserDTO(user)
        const tokens = tokenService.generate({...userDTO})
        await tokenService.save(userDTO.id, tokens.refreshToken)

        return {
            ...tokens
        };
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiError.unauthorized()
        }

        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.find(refreshToken)
        if(!userData || !tokenFromDb) {
            throw ApiError.unauthorized()
        }

        const user = await User.findOne({where: {id: userData.id}})
        if(!user) {
            throw ApiError.badRequest(`User is not found.`);
        }

        const userDTO = new UserDTO(user)
        const tokens = tokenService.generate({...userDTO})
        await tokenService.save(userDTO.id, tokens.refreshToken)

        return {
            ...tokens
        }
    }
}

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(5);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
}

module.exports = new AuthService()