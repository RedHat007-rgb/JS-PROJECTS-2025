const express=require("express");
const app=express();
const port=3000;




app.get("/hello",(req,res)=>{
    res.status(200).send("Hello,setup done......")
})




app.listen(3000,()=>{
    console.log(`server is listening to ${port}......`);
})