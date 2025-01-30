const mongoose=require("mongoose");

const connect=async(URL)=>{
    return await mongoose.connect(URL);
}

module.exports=connect;