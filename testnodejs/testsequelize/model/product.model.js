import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Product = sequelize.define("product",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:DataTypes.STRING,
    price:DataTypes.FLOAT,
    description:DataTypes.STRING,
    category:DataTypes.STRING,
    discountPercentage: DataTypes.FLOAT,
    rating: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    warrantyInformation: DataTypes.STRING,
    shippingInformation: DataTypes.STRING,
    availabilityStatus: DataTypes.STRING,
    returnPolicy: DataTypes.STRING,
    thumbnail: DataTypes.STRING 
});
sequelize.sync()
.then(()=>{
    console.log("Product Model Created...");
}).catch(err=>{
    console.log(err);
});
export default Product;