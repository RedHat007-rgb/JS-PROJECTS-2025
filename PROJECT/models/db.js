const mongoose=require("mongoose");
const validator=require("validator");

const User_Schema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        max:20,
        min:5
    },
    number:{
        type:Number,
        // max:11,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Please enter valid email valid email address"],
        validate:{
            validator:validator.isEmail
        }
    },
    password:{
        type:String,
        required:true,
        max:15
    }
})



const jobs=mongoose.Schema({
    Name_of_the_job:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        max:[50,"Please do not exceed more than 50 characters"]
    },
    Date_Posted:{
        type:Date,
        default:Date.now(),
    },
    Expiration:{
        type:Date,
        required:true
    }
})
const Users=mongoose.model("USERS",User_Schema);
const Jobs=mongoose.model("JOBS",jobs)


module.exports={
    Users,
    Jobs
};