import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._products = [
            {id: 1, name: "Product 1", price: 1000, rating: 1, image: "https://via.placeholder.com/400x300"},
            {id: 2, name: "Product 2", price: 2000, rating: 2, image: "https://via.placeholder.com/400x300"},
            {id: 3, name: "Product 3", price: 3000, rating: 3, image: "https://via.placeholder.com/400x300"},
            {id: 4, name: "Product 4", price: 4000, rating: 4, image: "https://via.placeholder.com/400x300"},
            {id: 5, name: "Product 5", price: 5000, rating: 5, image: "https://via.placeholder.com/400x300"},
        ]

        makeAutoObservable(this)
    }

    setProducts(products) {
        this._products = products
    }

    get products() {
        return this._products
    }
}