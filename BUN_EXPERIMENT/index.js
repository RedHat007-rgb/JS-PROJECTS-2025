import express from "express";
import getData from "./controllers.js"
const app=express();

app.use(express.json());

app.get("/hello",(req,res)=>{
    getData();
})


app.listen(3000,()=>{
    console.log("server is listening on 3000");
})