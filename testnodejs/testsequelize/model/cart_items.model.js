import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const CartItems = sequelize.define("cart_item",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});
sequelize.sync()
.then(()=>{
    console.log("CartItem Model Created...");
}).catch(err=>{
    console.log(err);
});
export default CartItems;