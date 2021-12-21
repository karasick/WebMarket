import {makeAutoObservable} from "mobx";

export default class CategoryStore {
    constructor() {
        this._categories = [
            {id: 1, name: "Category 1"},
            {id: 2, name: "Category 2"},
            {id: 3, name: "Category 3"},
            {id: 4, name: "Category 4"},
            {id: 5, name: "Category 5"},
            {id: 6, name: "Category 6"},
        ]
        this._selectedCategory = {}

        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }

    setSelectedCategory(category) {
        this._selectedCategory = category
    }

    get categories() {
        return this._categories
    }

    get selectedCategory() {
        return this._selectedCategory
    }
}