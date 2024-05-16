import { makeAutoObservable } from 'mobx'

export default class BasketStore {
    constructor() {

        this._basket = {};
        this._basketItems = [];
        this._basketId = null;
        this._basketQuantity = [];
        this._totalQuantity = 0;
        makeAutoObservable(this)
    }
    setBasket(basket) {
        this._basket = basket;
    }

    setBasketId(basketId) {
        this._basketId = basketId;
    }

    setBasketItems(basketItems) {
        if (Array.isArray(basketItems)) {
            this._basketItems = basketItems;
        } else {
            this._basketItems = [basketItems];
        }
    }

    setBasketQuantity(basketQuantity) {
        this._basketQuantity = basketQuantity;
    }
    setTotalQuantity(quantity) {
        this._totalQuantity = quantity;
    }

    getTotalQuantity() {
        return this._totalQuantity;
    }
    getBasket() {
        return this._basket
    }

    getBasketId() {
        return this._basketId;
    }

    getBasketItems() {
        return this._basketItems;
    }
    getBasketQuantity() {
        return this._basketQuantity;
    }
}
