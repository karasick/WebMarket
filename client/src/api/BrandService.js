import {$authHost, $host} from "../http";

export default class BrandService {
    static async create (brand) {
        const {data} = await $authHost.post('/api/brands', brand)
        return data
    }

    static async getAll () {
        const {data} = await $host.get('/api/brands')
        return data
    }
}