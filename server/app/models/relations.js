const Product = require("./Product");
const Category = require("./Category");
const BrandCategory = require("./BrandCategory");
const Brand = require("./Brand");
const BasketProduct = require("./BasketProduct");
const ProductRating = require("./ProductRating");
const ProductSpecification = require("./ProductSpecification");
const User = require("./User");
const UserBasket = require("./UserBasket");
const Token = require("./Token");

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
Token.belongsTo(User)

UserBasket.hasMany(BasketProduct)
BasketProduct.belongsTo(UserBasket)

