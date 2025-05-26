import pool from "../db/dbConfig.js";

class User{
    constructor(id,name,email,password,contact){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.contact = contact;
    }
    static find(email,password){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "select * from user where email = ? and password = ?";
                   con.query(sql,[email,password],(err,result)=>{
                      con.release();
                      err ? reject(err) : resolve(result);
                   })
                }
                else reject(err);
            })
          });   
    }
    static hasEmail(email){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(!err){
               let sql = "select * from user where email = ?";
               con.query(sql,[email],(err,result)=>{
                  con.release();
                  err ? reject(err) : resolve(result);
               })
            }
            else reject(err);
        })
      });
    } 
    create(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "insert into user(name,email,password,contact) values(?,?,?,?)";
                   con.query(sql,[this.name,this.email,this.password,this.contact],(err,result)=>{
                    con.release();
                    err ? reject(err) : resolve(result);
                   })
                }
                else
                  reject(err);
            })
        });
    }
}

export default User;