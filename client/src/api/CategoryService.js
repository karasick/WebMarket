import {$authHost, $host} from "../http";

export default class CategoryService {
    static async create (category) {
        const {data} = await $authHost.post('/api/categories', category)
        return data
    }

    static async getAll () {
        const {data} = await $host.get('/api/categories')
        return data
    }
}