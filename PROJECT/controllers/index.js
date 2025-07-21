require("dotenv").config();
const {Users} = require("../models/db");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
// const ObjectID=Schema.ObjectID;

const signup = async(req,res) => {
    const name=req.body.name;
    const number=req.body.number;
    const email=req.body.email;
    const password=req.body.password;
    const hash=await bcrypt.hash(password,10);

    const new_User= await Users.create({
        name:name,
        number:number,
        email:email,
        password:hash
    })
    console.log(new_User);
    res.status(200).send("Successfully signed up.....")

}

const login=async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const findUser=await Users.findOne({email:email});
    if(!findUser){
        res.status(403).send("Invalid details......")
    }
    const validation=await bcrypt.compare(password,findUser.password);
    if(validation==true){
        const token=jwt.sign(email,process.env.JWT_SECRET);
        console.log("token:"+token);
        res.setHeader("token",token);
        res.status(200).send("LOGGEDIN .............")
    }

}



const profile=async (req,res)=>{
        // const email=req.body.email;
        // const findUser=await Users.findOne({email:email});
        // if(!findUser){
        //     res.status(403).send("Invalid details......")
        // }
        res.status(200).send("inside profile.....");

}


module.exports={signup,login,profile}