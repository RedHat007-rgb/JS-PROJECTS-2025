const jwt=require("jsonwebtoken");
require("dotenv").config();

const login=async(req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        res.json({
            msg:"please enter valid credentials....."
        }).status(404)
    } 
    const date=new Date();
    const token=jwt.sign({
        username,date
    },process.env.JWT_SECRET)
    res.json({
        msg:"user created",
        token:token
    })

}

const dashboard=async(req,res)=>{
    console.log(req.user);

    const luckyNumber=Math.floor(Math.random()*100)
        res.json({
            msg:`Hello ${req.user.username}`,
            secret:`Here is your data, your lucky number is ${luckyNumber}`
        })
    
}

module.exports={login,dashboard}