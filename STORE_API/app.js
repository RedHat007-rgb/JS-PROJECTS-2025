const database=require("./db/tasks.js");
const db=require("./db/tasks.js");
require("dotenv").config();
const express=require("express");
const router=require("./routes/tasks.js")
const app=express();
const port=3000;


app.use("/v1/products",router);

app.get("/hello",(req,res)=>{
    res.status(200).send("Hello,setup done......")
})


const startDB=async()=>{
    await database(process.env.MONGO_URI);
    app.listen(3000,()=>{
    console.log(`server is listening to ${port}......`);
})
}


startDB();


