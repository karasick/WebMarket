import {makeAutoObservable} from "mobx";
import BrandService from "../api/BrandService";

export default class BrandStore {
    constructor() {
        this._brands = []
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

    async createBrand(name) {
        const newBrand = await BrandService.create({name})
        return newBrand
    }
}