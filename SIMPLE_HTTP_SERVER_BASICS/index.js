const express=require("express");
const app=express();


app.get("/sum/:a/:b",(req,res)=>{
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    value=a+b;
    res.send(`${value}`);
})


app.get("/multiply",(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    value=a*b;
    res.send(`${value}`);
})

app.get("/diff/:a/:b",(req,res)=>{
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    value=a-b;
    res.json(`${value}`)
})


app.listen(3000,()=>{
    console.log("server is listening to 3000....")
})