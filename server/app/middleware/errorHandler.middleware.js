const ApiError = require("../exceptions/api.error");

module.exports = function (err, req, res, next) {
    if(err instanceof ApiError) {
        return res.status(err.status).json({message: err.message})
    }

    if(err instanceof Error) {
        return res.status(500).json({message: err.message})
    }

    return res.status(500).json({message: "Undefined error."})
}