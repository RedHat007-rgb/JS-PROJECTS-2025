const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const User_Schema=new Schema({
    name:{type:String,unique:true,require:true},
    email:String,
    password:String
})

const userModel=mongoose.model("user",User_Schema);

module.exports=userModel