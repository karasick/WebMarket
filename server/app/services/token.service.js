const jwt = require('jsonwebtoken')
const Token = require("../models/Token");

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET

class TokenService {
    generateAccess(payload) {
        return jwt.sign(payload, JWT_ACCESS_SECRET, {expiresIn: "30m", })
    }

    generateRefresh(payload) {
        return jwt.sign(payload, JWT_REFRESH_SECRET, {expiresIn: "30d"})
    }

    generate(payload) {
        const accessToken = this.generateAccess(payload)
        const refreshToken = this.generateRefresh(payload)

        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, JWT_ACCESS_SECRET)

            return userData
        }
        catch (e) {
            return null;
        }
    }


    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, JWT_REFRESH_SECRET)

            return userData
        }
        catch (e) {
            return null;
        }
    }

    async save(userId, refreshToken) {
        const tokenData = await Token.findOne({where: {id: userId}})
        if(tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }

        const newToken = await Token.create({userId, refreshToken})

        return newToken
    }

    async remove(refreshToken) {
        const tokenData = await Token.findOne({where: {refreshToken}})
        if(tokenData) {
            await tokenData.destroy()
        }

        return tokenData
    }

    async find(refreshToken) {
        const tokenData = await Token.findOne({where: {refreshToken}})

        return tokenData
    }
}

module.exports = new TokenService()