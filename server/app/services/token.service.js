const jwt = require('jsonwebtoken')

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET

class TokenService {
    generateAccess(payload) {
        const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {expiresIn: "30m", })

        return accessToken
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
}

module.exports = new TokenService()