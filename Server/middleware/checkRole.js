const ApiError = require('../error/ApiError');

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                throw ApiError.unauthorized('User not authorized');
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (decoded.role !== role) {
                throw ApiError.forbidden('User does not have permission');
            }
            req.user = decoded;
            next();
        } catch (e) {
            next(ApiError.unauthorized('User not authorized'));
        }
    };
};


