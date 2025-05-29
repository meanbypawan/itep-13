import Product from "../model/product.model.js";
export const buyNowPage = async(request,response,next)=>{
   try{ 
    let result = await Product.findById(request.params.productId);
    let product = result[0];
    console.log(product);
    return response.render("buy-now.ejs",{isLoggedIn: request.session.isLoggedIn,currentUser: request.session.currentUser});
   }
   catch(err){
    console.log(err);
    // you can render error.ejs page here.
   }
}
export const getProductById = (request,response,next)=>{
   Product.findById(request.params.productId)
   .then(result=>{
     console.log(result[0]);
     return response.render("view-more.ejs",{isLoggedIn: request.session.isLoggedIn,product:result[0],currentUser: request.session.currentUser});
   }).catch(err=>{
    console.log(err);
   }); 
}
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