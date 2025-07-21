require("dotenv").config();
const express=require("express");
const connect = require("./connect/connect");
const router = require("./routes/route");

const app=express();
const PORT=process.env.PORT || 3000;
app.use(express.json());


app.use("/api/v1/",router);


const start=async()=>{
    try{
        app.listen(PORT,async ()=>{
        await connect(process.env.MONGO_URL)
        console.log(`Server is coonnected to ${PORT}........`)
        })
    }catch{
        console.log("Please try again later.......")
    }
}

start();

