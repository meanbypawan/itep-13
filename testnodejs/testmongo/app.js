import express from "express";
import http from "http";
import ProductRouter from "./routes/product.route.js";
import bodyParser from "body-parser";
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/product",ProductRouter);

server.listen(3000,()=>{
    console.log("Server Started....");
});