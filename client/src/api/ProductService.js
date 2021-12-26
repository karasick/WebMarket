import {$authHost, $host} from "../http";

export default class ProductService {
    static async create (product) {
        const {data} = await $authHost.post('/api/products', product)
        return data
    }

    static async getOne (id) {
        const {data} = await $host.get('/api/products/' + id)
        return data
    }

    static async getAll () {
        const {data} = await $host.get('/api/products')
        return data
    }

    static async getAll (categoryId, brandId, page, limit) {
        const {data} = await $host.get('/api/products', {params: {
            categoryId, brandId, page, limit
            }})
        return data
    }
}