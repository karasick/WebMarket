import {makeAutoObservable} from "mobx";
import ProductService from "../api/ProductService";

export default class ProductStore {
    constructor() {
        this._products = []
        this._page = 1
        this._totalCount = 0
        this._limitPerPage = 2

        makeAutoObservable(this)
    }

    get products() {
        return this._products
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limitPerPage() {
        return this._limitPerPage
    }

    setProducts(products) {
        this._products = products
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setLimitPerPage(limit) {
        this._limitPerPage = limit
    }

    async createProduct(product) {
        try {
            const newProduct = await ProductService.create(product)
            return newProduct
        }
        catch (e) {
            console.error(e)
            if(e.response?.data?.message){
                console.error(e.response.data.message)
            }
        }
    }
}