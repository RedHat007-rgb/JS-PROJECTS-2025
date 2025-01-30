const mongoose=require("mongoose");


const task=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    status:{type:String,enum: ["inprogress","completed","incomplete"],default:"incomplete"},
    duedate:{
        type:Date,
        default:()=>{
        const date=new Date();
        date.setDate(date.getDate()+2);
        return date;}
    }
})

module.exports=mongoose.model("Tasks",task);