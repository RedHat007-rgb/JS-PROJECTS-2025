
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ?statusCode:500;
    res.json({
        title:"Not Found",
        message:err.message,
        stackTrace:err.stack,
    })
}