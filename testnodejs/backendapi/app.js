import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";
import ProductRouter from "./routes/product.route.js";
import CartRouter from "./routes/cart.route.js";
import CategoryRouter from "./routes/category.route.js";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import OrderRouter from "./routes/order.route.js";
dotenv.config();
const app = express();


mongoose.connect(process.env.DB_URL)
.then(result=>{
   //https://backendapi-13-zim5.onrender.com 
   app.use(express.static("public"));
   app.use(cors());
   app.use(cookieParser()); 
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true})); 
   app.use("/user",UserRouter); 
   app.use("/product",ProductRouter);
   app.use("/cart",CartRouter);
   app.use("/category",CategoryRouter);
   app.use("/order",OrderRouter);
   app.listen(process.env.PORT||3000,()=>{
    console.log("Server Started....");
   });
}).catch(err=>{
    console.log(err);
    console.log("Database connection failed...");
})

