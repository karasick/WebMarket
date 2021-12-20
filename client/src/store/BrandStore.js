import {makeAutoObservable} from "mobx";

export default class BrandStore {
    constructor() {
        this._brands = [
            {id: 1, name: "Brand 1"},
            {id: 2, name: "Brand 2"},
        ]

        makeAutoObservable(this)
    }

    setBrands(brands) {
        this._brands = brands
    }

    get brands() {
        return this._brands
    }
}