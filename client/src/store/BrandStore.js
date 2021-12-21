import {makeAutoObservable} from "mobx";

export default class BrandStore {
    constructor() {
        this._brands = [
            {id: 1, name: "Brand 1"},
            {id: 2, name: "Brand 2"},
            {id: 3, name: "Brand 3"},
            {id: 4, name: "Brand 4"},
            {id: 5, name: "Brand 5"},
            {id: 6, name: "Brand 6"},
        ]
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setBrands(brands) {
        this._brands = brands
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get brands() {
        return this._brands
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}