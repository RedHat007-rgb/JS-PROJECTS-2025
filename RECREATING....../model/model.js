const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const User_Schema=new Schema({
    name:{type:String,unique:true,require:true},
    email:{type:String,unique:true,require:true},
    password:String
})

// const Todo_Schema=new Schema({
   
//     title:String,
//     done:false,
// })

const userModel=mongoose.model("user",User_Schema);

module.exports=userModel