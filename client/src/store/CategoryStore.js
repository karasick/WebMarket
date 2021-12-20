import {makeAutoObservable} from "mobx";

export default class CategoryStore {
    constructor() {
        this._categories = [
            {id: 1, name: "Category 1"},
            {id: 2, name: "Category 2"},
        ]

        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }

    get categories() {
        return this._categories
    }
}