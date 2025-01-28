const userModel=require("/Users/basanireddy/Documents/2025/JS-PROJECTS/RECREATING....../model/model.js")
const signup=(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    userModel.create({
        name:name,
        email:email,
        password:password
    })
    res.status(200).send("user crested successfully")

}

const signin=(req,res)=>{
     res.status(200).send("Hello world....")
}

const todo=(req,res)=>{
     res.status(200).send("Hello world....")
}

const todos=(req,res)=>{
     res.status(200).send("Hello world....")
}


module.exports={signup,signin,todo, todos}