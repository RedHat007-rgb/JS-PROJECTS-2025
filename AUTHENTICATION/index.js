const express=require("express");
const jwt=require("jsonwebtoken");
const app=express();
app.use(express.json());

const users=[];

const JWTSECRET="vhjvhjdsfdsfhhdsfbhshbhasbhb"

app.post("/signup",(req,res)=>{
    console.log(req.body);
    const username=req.body.username;
    const password=req.body.password;
    users.push({
        username:username,
        password:password
    })
    console.log(users)
    res.json({
        msg:"you have succesfully signedup"
    })
})
//  let freshUser=null;
app.post("/signin",(req,res)=>{
    console.log(req.body);
    let freshUser=null;
    const username=req.body.username;
    const password=req.body.password;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password==password){
            freshUser=users[i]; 
        }
    }
    if(freshUser){
        const token1=jwt.sign({
            username:username
        },JWTSECRET);
        // freshUser.token=token1
        // console.log(freshUser)
        // console.log(users);
        res.json({
            token:token1
        })
    }else{
        res.json({
            msg:"sorry,WE couldn't find the details..."
        })
    }
app.get("/me",(req,res)=>{
    const token=req.headers.token;
    let foundUser=null;
    const dec=jwt.verify(token,JWTSECRET);
    const username=dec.username
    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            foundUser=users[i]
        }
    }

    if(foundUser){
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }else{
        res.json({
            msg:"we could not find the details....."
        })
    }
    
    
})

})



app.listen(3000,()=>{
    console.log("server is listening to 3000")
})