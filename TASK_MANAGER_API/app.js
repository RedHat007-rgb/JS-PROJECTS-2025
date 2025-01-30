require("dotenv").config();
PORT=process.env.PORT ;
URL=process.env.MONGO_URL;
const express=require("express");
const { connect } = require("mongoose");
const router = require("./routes/taskRoutes");

const app=express();
app.use(express.json());


app.use("/tasks",router);
app.get("/hello",(req,res)=>{
    res.send("Hello.....")
})

const start=async()=>{
    await connect(URL);
    app.listen(PORT,()=>{
        console.log(`server is listening to ${PORT}.....`);
    })
}
start();
