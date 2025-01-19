const database=require("./db/tasks.js");

require("dotenv").config();
const express=require("express");
const router=require("./routes/tasks.js")
const app=express();
const port=3000;
const notFound=require("./middlewares/notFOund.js")
//app.use("/v1/products",router);
app.get("/",(req,res)=>{
    res.send('<h1>STORE API</h1><a href="/v1/products">Product API</a>')
})
app.use("/v1/products",router);
app.use(notFound);


const startDB=async()=>{
    await database(process.env.MONGO_URI);
    app.listen(3000,()=>{
    console.log(`server is listening to ${port}......`);
})
}
startDB();