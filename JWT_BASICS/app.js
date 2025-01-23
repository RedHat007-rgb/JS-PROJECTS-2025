const express=require("express");
const app=express();
const router=require("./routes/main");
const notfound=require("./middleware/not-found");
require("dotenv").config();




app.use(express.static("./public"))
app.use(express.json());
app.use("/api/v1",router);
app.use(notfound);






PORT=process.env.PORT ||3000
const start=async ()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`server is listening to ${PORT}`)
        })
    }catch(err){
        console.log(err);
    }
}

start();