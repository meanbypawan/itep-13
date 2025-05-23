import pool from "../db/dbConfig.js";
export const signUp = (request,response,next)=>{
  let {name,email,password,contact} = request.body;
  pool.getConnection((err,con)=>{
    if(!err){
       let sql  = "insert into user(name,email,password,contact) values(?,?,?,?)";
       con.query(sql,[name,email,password,contact],(err,result)=>{
          con.release();
          err ? console.log(err) : console.log(result);
       });
       
    }
    else{
     console.log(err);
    }
  })
}