import mongoose from "mongoose";

const categorySchema =new mongoose.Schema({
    slug:String,
    name:String,
    url:String
});

export const Category = mongoose.model("category",categorySchema);