import { makeAutoObservable } from 'mobx'

export default class ItemStore {
    constructor() {
        this._types = [
            { id: 2, name: 'Aromatic' },
            { id: 3, name: 'Chypre' },
            { id: 4, name: 'Citrus' },
            { id: 5, name: 'Floral' },
            { id: 6, name: 'Leather' },
            { id: 7, name: 'Woody' },
        ]
        this._brands = [
            { id: 1, name: 'Byredo' },
            { id: 2, name: 'Creed' },
            { id: 3, name: 'Vilhelm Parfumerie' },
            { id: 4, name: 'Xerjoff' },
            { id: 5, name: 'Serge Lutens' },
            { id: 6, name: 'Amouage' },
            { id: 7, name: 'Maison Francis Kurkdjian' },
            { id: 8, name: 'Tom Ford' },
            { id: 9, name: 'Montale' },
            { id: 10, name: "Penhaligon's" },
            { id: 11, name: 'Carner Barcelona' },

        ]
        this._items = [
            { id: 4, name: 'Voulez-vous Coucher Avec Moi', price: 300, rating: 0, img: '1bac30cb-b212-4cec-8eaa-1c8301bdcc85.jpg' },
            { id: 5, name: 'Torino21', price: 185, rating: 0, img: '694678fc-da97-4de6-bbb0-656b3a518f2e.jpg' },
            { id: 7, name: 'Room Service', price: 250, rating: 0, img: '1e5b2e39-f503-4466-a6d1-d106cbeca0a3.jpg' },
            { id: 8, name: 'Chicago High', price: 250, rating: 0, img: '6c46a0f8-73d4-41f9-ac96-818a381fb77d.jpg' },
            { id: 9, name: 'Stockholm 1978', price: 250, rating: 0, img: 'af4ecb10-5def-4f85-b1ad-0e37823b5a05.jpg' },
            { id: 10, name: 'Poets Of Berlin', price: 250, rating: 0, img: 'a37bc127-1777-41a2-83a2-8a5699616af5.jpg' },
            { id: 11, name: 'Torino22', price: 200, rating: 0, img: '9d016fc2-40a1-4cbf-b9c2-db02b9e5f2b0.jpg' },
            { id: 12, name: 'Lira', price: 185, rating: 0, img: '51dedfa9-ccb8-4625-9253-f78c8c0c438c.jpg' },
            { id: 13, name: 'Eyes Closed', price: 165, rating: 0, img: 'f2583a14-2a44-4e92-907d-d071c8247a38.jpg' },
            { id: 14, name: 'Bibliothèqu', price: 165, rating: 0, img: '83eaebae-c648-4369-926d-436ca7e63cd6.jpg' },
            { id: 15, name: 'De Los Santos', price: 165, rating: 0, img: '7e66f8fd-a98c-4d48-9a52-e05ad44d9e0b.jpg' },
            { id: 16, name: 'Silver Mountain Water', price: 200, rating: 0, img: '60e21c0b-9c01-407e-99bc-caf8db7cb489.jpg' },
            { id: 17, name: 'Asian Green Tea', price: 200, rating: 0, img: '2b2bbc1d-490f-47e9-bed6-6b2248207167.jpg' },
            { id: 18, name: 'Carmina', price: 200, rating: 0, img: '10ad9add-76c7-4f89-91fd-c38d19d81c9a.jpg' },
            { id: 19, name: 'Moonlight in Heaven', price: 200, rating: 0, img: 'ba4cf096-79ae-4862-8d13-e4c412acd92c.jpg' }
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setUser(items) {
        this._items = items
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get items() {
        return this._items
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }

}