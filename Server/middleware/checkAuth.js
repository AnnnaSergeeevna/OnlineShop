const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');
const { Basket } = require('../models/models');


module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
        return;
    }
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            throw ApiError.unauthorized('Authorization header missing or invalid');
        }
        const token = authorizationHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;

        next();
    } catch (e) {
        next(ApiError.unauthorized('User not authorized'));
    }
};

