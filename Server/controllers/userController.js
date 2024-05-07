const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Basket } = require('../models/models')

const generateJwt = (id, email, role, basketId) => {
    return jwt.sign(
        { id, email, role, basketId },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Invalid value'))
        }
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest('A user with this email address already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ email, role, password: hashPassword })
        const basket = await Basket.create({ userId: user.id })
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({ token })
    }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiError.badRequest('User not found'))
        }
        const comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Wrong password'))
        }
        const basket = await Basket.findOne({ where: { userId: user.id } });
        const token = generateJwt(user.id, user.email, user.role, basket.id)
        return res.json({ token, basketId: basket.id })
    }

    async check(req, res, next) {
        const basket = await Basket.findOne({ where: { userId: req.user.id } });
        const token = generateJwt(req.user.id, req.user.email, req.user.role, basket.id)
        return res.json({ token })
    }
}

module.exports = new UserController()
