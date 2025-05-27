import Product from "../model/product.model.js";

export const saveInBulk = async (request,response,next)=>{
   try{ 
    let productList = request.body;
    for(let product of productList){
        await Product.create(product);
    }
    return response.status(201).json({message: "All product saved.."});
   }
   catch(err){
    console.log(err);
   } 
}