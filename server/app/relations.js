const Product = require("./models/Product");
const Category = require("./models/Category");
const BrandCategory = require("./models/BrandCategory");
const Brand = require("./models/Brand");
const BasketProduct = require("./models/BasketProduct");
const ProductRating = require("./models/ProductRating");
const ProductSpecification = require("./models/ProductSpecification");
const User = require("./models/User");
const UserBasket = require("./models/UserBasket");

Product.hasMany(BasketProduct)
Product.hasMany(ProductRating)
Product.hasMany(ProductSpecification, {as: "specifications"})
BasketProduct.belongsTo(Product)
ProductRating.belongsTo(Product)
ProductSpecification.belongsTo(Product)

Brand.hasMany(Product)
Brand.belongsToMany(Category, {through: BrandCategory})
Product.belongsTo(Brand)

Category.hasMany(Product)
Category.belongsToMany(Brand, {through: BrandCategory})
Product.belongsTo(Category)

User.hasOne(UserBasket)
User.hasMany(ProductRating)
UserBasket.belongsTo(User)
ProductRating.belongsTo(User)

UserBasket.hasMany(BasketProduct)
BasketProduct.belongsTo(UserBasket)

