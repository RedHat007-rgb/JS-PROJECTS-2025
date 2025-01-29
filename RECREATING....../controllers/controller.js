const userModel=require("/Users/basanireddy/Documents/2025/JS-PROJECTS/RECREATING....../model/model.js")
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const signup=async (req,res)=>{
    const name=req.body.name;
    const email=req.body.email;

    const password=req.body.password;

    const hashedpassword=await bcrypt.hash(password,5);
    console.log(hashedpassword);
    if (hashedpassword){
        await userModel.create({
        name:name,
        email:email,
        password:hashedpassword
    })
        res.status(200).send("user crested successfully")
        return;
    }
    res.send("User already exists");

}

const signin=async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

   
    const user=await userModel.findOne({
        email:email
    })
    if(!user){
        res.status(403).send("user not found...........")
        return
    }
    console.log(user.password);
    const passwordMatch=await bcrypt.compare(password,user.password);
    if(!passwordMatch){
        res.status(400).send("please enter correct password.....")
    }
    
    
        const token=jwt.sign({
            email
        },process.env.JWT_SECRET)
        res.setHeader("cookie",token);
        res.status(200).send("signed in successfully")
    
}

const todo=(req,res)=>{

    res.status(200).send("Hello world....")
}

const todos=(req,res)=>{
    res.status(200).send("Hello world....")
}


module.exports={signup,signin,todo, todos}