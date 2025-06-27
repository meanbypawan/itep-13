import { request, response } from "express";
import { Product } from "../model/product.model.js";
import { query } from "express-validator";

export const searchProduct = async(request,response,next)=>{
   try{ 
    let {title,minPrice,maxPrice,category} = request.query;
    let query = {};
    if(category)
        query.category = {$regex:category,$options:'i'};
    if(title)
        query.title = {$regex:title, $options: 'i'};
    if(minPrice || maxPrice)
        query.price = {};
    if(minPrice)
        query.price.$gte = minPrice;
    if(maxPrice)
        query.price.$lte = maxPrice;
    const result = await Product.find(query);
    return response.status(200).json({searchResult:result});
   }
   catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
   }
}

export const fetchProduct = async(request,response,next)=>{
  try{
    const {id} = request.params;
    const product = await Product.findById({_id:id});
    return response.status(200).json({product});
  } 
  catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error.."});
  } 
}

export const list = async(request,response,next)=>{
    try{
        const result = await Product.find();
        return response.status(200).json({productList: result});
    }
    catch(err){
        return response.status(500).json({error: "Internal Server Error"});
    }
}
export const saveInBulk = async(request,response,next)=>{
   try{
      const result = await Product.insertMany(request.body)
      return response.status(201).json({message: "Data saved..."});
   }
   catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
   }
}