require("dotenv").config();
const mongoose=require("mongoose");
url=process.env.MONGO_URI;
const connect=async ()=>{
    return await mongoose.connect(url);
}

module.exports=connect;