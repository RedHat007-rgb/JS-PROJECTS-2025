import express from "express";
const app=express();
let requestCount=0;

app.use(express.json());



app.use(function reqCountMiddleware(req,res,next){
    requestCount=requestCount+1;
    next();
})

app.get("/1",function(req,res){
    res.json({
        msg:"you hit the server 1",
        status:200
    })
})

app.get("/2",function(req,res){
    res.json({
        msg:"you hit the server 2",
        status:200
    })
})


app.get("/req",function(req,res){
    res.status(200).json({
        requestcount:{requestCount}
    })
})









app.listen(3000,()=>{
    console.log("server is listening to 3000....")
})