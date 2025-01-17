const mongoose=require("mongoose");
const connect= async(dburl)=> {
    return mongoose.connect(dburl);
    
}
module.exports=connect;