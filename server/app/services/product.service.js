const Product = require('../models/Product')
const ProductSpecification = require('../models/ProductSpecification')
const imageService = require('./image.service')
const path = require('path')

const uuid = require('uuid')

class CategoryService {
    async getAll(searchQuery) {
        let {brandId, categoryId, limit, page} = searchQuery

        limit = limit || 10
        page = page || 1
        const offset = page * limit - limit

        let products = {};

        if(!brandId && !categoryId) {
            products = await Product.findAndCountAll({
                limit,
                offset
            })
        }

        if(!brandId && categoryId) {
            products = await Product.findAndCountAll({
                where: {categoryId},
                limit,
                offset
            })
        }

        if(brandId && !categoryId) {
            products = await Product.findAndCountAll({
                where: {brandId},
                limit,
                offset
            })
        }

        if(brandId && categoryId) {
            products = await Product.findAndCountAll({
                where: {brandId, categoryId},
                limit,
                offset
            })
        }

        return products;
    }

    async create(product, image) {
        let {name, description, price, brandId, categoryId, specifications} = product
        const productData = {
            name,
            description,
            price,
            brandId,
            categoryId,
            image: null
        }

        if(image) {
            const imageName = imageService.getNameAndSlice(image.name)
            const imageExtension = imageService.getExtension(image.name)
            const imageFileName = imageName + '-' + uuid.v4() + '.' + imageExtension

            await image.mv(path.resolve(__dirname, '../..', 'static', imageFileName))

            productData.image = imageFileName
        }

        const newProduct = await Product.create(productData)

        if(specifications) {
            specifications = JSON.parse(specifications)
            specifications.forEach(specification => {
                ProductSpecification.create({
                    title: specification.title,
                    description: specification.description,
                    productId: newProduct.id
                }).catch((e) => console.log(e))
            })
        }

        return newProduct
    }

    async getOne(id) {
        console.log(id)
        const product = await Product.findOne({
            where: {id},
            include: [{model: ProductSpecification, as: "specifications"}]
        })
        return product
    }
}

module.exports = new CategoryService()