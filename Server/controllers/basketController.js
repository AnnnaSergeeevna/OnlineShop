const Router = require('express')
const router = new Router()
const { Basket, BasketItem, Item, ItemInfo } = require('../models/models')
const ApiError = require('../error/ApiError')
const checkAuth = require('../middleware/checkAuth');


class basketController {
    async createBasket(req, res, next) {
        try {
            const { userId } = req.body;
            let basket = await Basket.findOne({ where: { userId } });
            if (!basket) {
                basket = await Basket.create({ userId });
            }
            return res.json(basket);
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
    // async addBasketItem(req, res, next) {
    //     try {
    //         const { basketId, itemId } = req.body;
    //         const basketItem = await BasketItem.create({ basketId, itemId });
    //         return res.json(basketItem);
    //     } catch (error) {
    //         next(ApiError.internal(error.message));
    //     }
    // }
    async append(req, res, next) {
        try {
            let { basketId, itemId } = req.body;
            const basketItem = await BasketItem.create({ basketId, itemId })
            console.log(`Item ${itemId} added successfully to basket ${basketId}`);
            res.json(basketItem);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }


    async getAll(req, res, next) {
        try {
            const { basketId } = req.params;
            const basketItems = await BasketItem.findAll({
                where: { basketId: basketId },
                include: [{ model: Item, include: [{ model: ItemInfo, as: 'info' }] }]
            });
            return res.json(basketItems);
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
    async getOne(req, res, next) {
        try {
            const { basketId } = req.params;
            const basket = await Basket.findOne({ where: { id: basketId } });
            if (!basket) {
                return res.status(404).json({ message: 'Basket not found' });
            }
            return res.json(basket);
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }

    async check(req, res, next) {
        checkAuth()(req, res, next);
    }

}

module.exports = new basketController()

