import CategoryItem from "./category.model.js";
import Product from "./product.model.js";
import Reviews from "./reviews.model.js";

CategoryItem.hasMany(Product,{foreignKey:"category"});
Product.belongsTo(CategoryItem,{foreignKey:"category",targetKey:"slug"});

Product.hasMany(Reviews);
Reviews.belongsTo(Product);

export {Product,Reviews,CategoryItem};