const userModel=require("/Users/basanireddy/Documents/2025/JS-PROJECTS/RECREATING....../model/model.js")
const jwt=require("jsonwebtoken");
const signup=async (req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    await userModel.create({
        name:name,
        email:email,
        password:password
    })
    res.status(200).send("user crested successfully")

}

const signin=async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user=await userModel.findOne({
        email:email,
        password:password
    })
    console.log(user);
    if(user){
        const token=jwt.sign({
            email
        },process.env.JWT_SECRET)
        res.setHeader("cookie",token);
        res.status(200).send("signed in successfully")
    }
}

const todo=(req,res)=>{
     res.status(200).send("Hello world....")
}

const todos=(req,res)=>{
     res.status(200).send("Hello world....")
}


module.exports={signup,signin,todo, todos}