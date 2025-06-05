import Category from "../model/category.model.js"

export const saveInBulk = (request,response)=>{
    Category.bulkCreate(request.body)
    .then(result=>{
        return response.status(201).json({message: "All category saved.."});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    });
}