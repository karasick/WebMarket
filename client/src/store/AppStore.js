import {makeAutoObservable} from "mobx";

export default class AppStore {
    constructor() {
        this._isLoading = false

        makeAutoObservable(this)
    }

    get isLoading() {
        return this._isLoading
    }

    setIsLoading(state) {
        this._isLoading = state
    }
}