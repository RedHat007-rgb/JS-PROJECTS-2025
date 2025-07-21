const mongoose=require("mongoose");

const connect=async (URL)=>{
    await mongoose.connect(URL);
}


module.exports=connect;