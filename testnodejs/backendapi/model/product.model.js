import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    id: Number,
    title:String,
    description: String,
    category: String,
    price:Number,
    discountPercentage: Number,
    stock: Number,
    rating:Number,
    brand:String,
    reviews: [],
    returnPolicy:String,
    images:[],
    thumbnail: String
});

export const Product = mongoose.model("product",productSchema);