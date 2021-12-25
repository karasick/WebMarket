import {$host} from "../http";
import jwtDecode from "jwt-decode";

export default class AuthService {
    static async register (email, password) {
        const {data} = await $host.post('/api/auth/register', {email, password, role: 'admin'})
        return {
            ...data,
            user: jwtDecode(data.accessToken)
        }

    }

    static async login (email, password) {
        const {data} = await $host.post('/api/auth/login', {email, password})
        return {
            ...data,
            user: jwtDecode(data.accessToken)
        }
    }

    static async logout() {
        return $host.post('/api/auth/logout')
    }

    static async refresh() {
        const {data} = await $host.get('/api/auth/refresh')
        return {
            ...data,
            user: jwtDecode(data.accessToken)
        }
    }
}