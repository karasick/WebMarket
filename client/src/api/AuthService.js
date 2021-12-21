import {$host} from "../http";

export default class AuthService {
    static async register (email, password) {
        return $host.post('/api/auth/register', {email, password, role: 'admin'})
    }

    static async login (email, password) {
        return await $host.post('/api/auth/login', {email, password})
    }

    static async logout() {
        return $host.post('/api/auth/logout')
    }

    static async refresh() {
        return $host.get('/api/auth/refresh')
    }
}