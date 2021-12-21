import {$authHost} from "../http";

export default class UserService {
    static async fetchUsers (email, password) {
        return $authHost.get('/api/users')
    }
}