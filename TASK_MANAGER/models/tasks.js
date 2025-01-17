const mongoose =require("mongoose");

const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        maxlength:[20,"Please enter below 20 alphabets"],
        trim:true,
        require:[true,"please provide the tasj name"]
    },
    completed:{
        type:Boolean,
        default:false,
    },
})


module.exports=mongoose.model("Task",TaskSchema)