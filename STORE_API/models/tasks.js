const mongoose=require("mongoose");
const ProductSchema=new mongoose.Schema({
    featured:{
        type:Boolean,
        default:false
    },
    name:{
        type:String,
        require:[true,"Please provide  name of the product"]
    },
    date:{
        type:Date,
        default:Date.now()
    },
    price:{
        type:Number,
        require:[true,"Please provide the product price"]
    },
    rating:{
        type:Number,
        default:4.9
    },
    company:{
        type:String,
        enum:{
            values:["marcos","ikea","liddy","caressa"],
            message:"{VALUE} is not supported"
        }
    }    // enum:["marcos,ikea,liddy,caressa"]
})
module.exports=mongoose.model("Product",ProductSchema);