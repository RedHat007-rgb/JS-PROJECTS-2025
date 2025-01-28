require("dotenv").config()
const port=process.env.PORT || 3000;
const express=require("express");
const app=express();


app.listen(port,()=>{
    console.log(`Server is listening to ${port}`)
})