const { BasketItem } = require('../models/models')
const ApiError = require('../error/ApiError')

class basketItemController {
    async create(req, res) {
        const { name } = req.body
        const basket_item = await BasketItem.create({ name })
        return res.json(basket_item)
    }
    async getAll(req, res) {
        const basket_item = await BasketItem.findAll()
        return res.json(basket_item)
    }

}

module.exports = new basketItemController()