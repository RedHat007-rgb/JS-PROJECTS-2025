const express=require("express");
import {Client } from "pg"
import { Response,Request } from "express";
import dotenv from "dotenv";
dotenv.config();
const app=express();
app.use(express.json());

console.log(process.env.URL)
const pgCLient=new Client(process.env.URL);
    

app.post("/",async (req:Request,res:Response)=>{
    const result = await pgCLient.query(`
        INSERT INTO users (username, email, password) 
        VALUES ('preetham', '123@gmail.com', '12345');
      `);
   
    res.json({
        msg:result,
    })
})
async function main(){
    await pgCLient.connect(); 
    console.log("connected to db...")
    app.listen(3000);
}

main();
