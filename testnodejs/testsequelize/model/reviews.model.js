import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Reviews = sequelize.define("review",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rating:DataTypes.INTEGER,
    comment:DataTypes.STRING,
    date: DataTypes.STRING,
    reviewerName:DataTypes.STRING,
    reviewerEmail:DataTypes.STRING
});
sequelize.sync()
.then(()=>{
    console.log("Review Model Created...");
}).catch(err=>{
    console.log(err);
})
export default Reviews;