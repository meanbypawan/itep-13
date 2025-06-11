import Cart from "./cart.model.js";
import CartItems from "./cart_items.model.js";
import CategoryItem from "./category.model.js";
import Product from "./product.model.js";
import Reviews from "./reviews.model.js";
import User from "./user.model.js";

CategoryItem.hasMany(Product,{foreignKey:"category"});
Product.belongsTo(CategoryItem,{foreignKey:"category",targetKey:"slug"});

Product.hasMany(Reviews);
Reviews.belongsTo(Product);

User.hasOne(Cart);
Cart.belongsTo(User); // Cart(userId)-->User(id)

Cart.belongsToMany(Product,{through: CartItems});
Product.belongsToMany(Cart,{through:CartItems});

export {Product,Reviews,CategoryItem,Cart,User};