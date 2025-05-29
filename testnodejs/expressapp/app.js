import express from "express";
import IndexRouter from "./routes/index.route.js";
import UserRouter from "./routes/user.route.js";
import ProductRouter from "./routes/product.route.js";
import bodyParser from "body-parser";
import session from "express-session";
const app = express();
app.set("view engine","ejs");
app.use(session({
    secret: 'fsfjkljsfrjweirweovmvnmbvxmbvmxcvrweoruweo'
}));
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/user",UserRouter);
app.use("/product",ProductRouter);
app.use("/",IndexRouter);

app.listen(3000,()=>{
    console.log("Server Started....");
});