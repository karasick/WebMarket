import {$authHost} from "../http";

export default class UserService {
    static async getAll () {
        const {data} = await $authHost.get('/api/users')
        return data
    }
}