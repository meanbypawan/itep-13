import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/mdb")
.then(result=>{
    console.log("Database connected...");
}).catch(err=>{
    console.log(err);
});
const db = mongoose.connection;
export default db;