import express from "express";
const app=express();

app.use(express.json());

//without middlewareswe break the DRY principle.

function agecheckerMiddleware(req,res,next){
    let age=req.body.age;
    if(age>18){
        next();
    }else{
        res.json({
            msg:"you are not eligible",
            status:404
        })
    }
}

app.use(agecheckerMiddleware);

app.get("/ride1",function(req,res){
    res.json({
            msg:"you have successfully riden the ride 1",
            status:200
        })
})

app.get("/ride2",function(req,res){
    res.json({
            msg:"you have successfully riden the ride 2",
            status:200
        })
})


app.listen(3000,()=>{
    console.log("server is listening to 3000....")
})



