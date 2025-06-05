import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const CategoryItem = sequelize.define("category_item",{
    slug:{
        type:DataTypes.STRING,
        primaryKey: true
    },
    name:DataTypes.STRING
});

sequelize.sync()
.then(()=>{
    console.log("CategoryItem Model Created...");
}).catch(err=>{
    console.log(err);
})
export default CategoryItem;