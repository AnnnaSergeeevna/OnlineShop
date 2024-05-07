import { makeAutoObservable } from 'mobx'

export default class BasketStore {
    constructor() {

        this._basket = {};
        this._basketItems = [];
        this._basketId = null;
        makeAutoObservable(this)
    }
    setBasket(basket) {
        this._basket = basket;
    }

    setBasketId(basketId) {
        this._basketId = basketId;
    }
    setBasketItems(basketItems) {
        this._basketItems = basketItems;
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
    get BasketItemsTotalCost() {
        return this._basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }
}
