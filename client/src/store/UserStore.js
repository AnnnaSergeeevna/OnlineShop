import { makeAutoObservable } from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._basketId = null
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setBasketId(basketId) {
        this._basketId = basketId;
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get basketId() {
        return this._basketId
    }
}

