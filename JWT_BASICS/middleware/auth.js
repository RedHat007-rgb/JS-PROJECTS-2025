const jwt=require("jsonwebtoken");
const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
        res.status(401).json({
            msg:"No token provided"
        })
    }
    const token=authHeader.split(" ")[1];
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded);
        req.user =decoded;
        next();
        
        
    }catch{
        res.status(401).json({
            msg:"Invalid Token"
        })
    }
}

module.exports=authMiddleware