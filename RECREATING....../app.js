require("dotenv").config();
const port=process.env.PORT ;
const express=require("express");
const router = require("./routes/route");
const connect = require("./db/connect");

const app=express();


app.use(express.json());
app.use("/",router);




app.listen(port,async()=>{
    try{
    await connect();
    console.log(`Server is listening to ${port}`)
    }catch(e){
        console.log(e);
    }
})