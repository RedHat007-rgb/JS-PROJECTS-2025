const express=require("express");
const app=express();

let reqCount=0;
app.use(express.json());
function usingMiddleware(req,res,next){
    console.log(req.method);
    console.log(req.url);
    console.log(Date.now());
    next();
}
app.use(usingMiddleware);
function requestCount(req,res,next){
    reqCount=reqCount+1;
    console.log("Count: " +reqCount)
    next();
}
app.use(requestCount)



app.get("/sum/",(req,res)=>{
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    value=a+b;
    res.json({
        "answer":value
    })
})


app.get("/multiply/:a/:b",(req,res)=>{
    let a=parseInt(req.params.a);
    console.log(typeof a)
    let b=parseInt(req.params.b);
    value=a*b;
    res.json({
        "answer":value
    })
})


app.listen(3000,()=>{
    console.log("server is listening to 3000...")
})