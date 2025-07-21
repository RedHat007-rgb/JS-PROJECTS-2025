const jwt=require("jsonwebtoken");
require("dotenv").config();

const authentication=(req,res,next)=> {
        const token=req.headers["token"];
        console.log(token);
        if(!token){
            res.status(403).send("Please login again.Session expired...")
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded);
        next();
}

module.exports=authentication;
