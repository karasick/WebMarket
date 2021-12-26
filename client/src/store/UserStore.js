import {makeAutoObservable} from "mobx";
import AuthService from "../api/AuthService";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}

        makeAutoObservable(this)
    }

    setIsAuth(state) {
        this._isAuth = state
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    async login(email, password) {
        try {
            const responseData = await AuthService.login(email, password)

            localStorage.setItem('token', responseData.accessToken);
            this.setUser(responseData.user)
            this.setIsAuth(true)
        }
        catch (e) {
            console.log(e)
            if(e.response.data.message) {
                console.log(e.response.data.message)
            }
            throw e
        }
    }

    async register(email, password) {
        try {
            const responseData = await AuthService.register(email, password)

            localStorage.setItem('token', responseData.accessToken);
            this.setUser(responseData.user)
            this.setIsAuth(true)
        }
        catch (e) {
            console.log(e)
            if(e.response.data.message) {
                console.log(e.response.data.message)
            }
            throw e
        }
    }

    async checkAuth() {
        try {
            const responseData = await AuthService.refresh();

            localStorage.setItem('token', responseData.accessToken);
            this.setIsAuth(true);
            this.setUser(responseData.user);
        }
        catch (e) {
            console.log(e)
            if(e.response.data.message) {
                console.log(e.response.data.message)
            }
            throw e
        }
    }

    async logout() {
        await AuthService.logout()

        localStorage.removeItem('token');
        this.setIsAuth(false)
        this.setUser({})
    }
}