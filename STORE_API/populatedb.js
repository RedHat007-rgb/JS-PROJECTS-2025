
const mongoose=require("mongoose");
require("dotenv").config();

const product=require("./models/tasks");
const jsonproducts=require("./products.json");

const start =async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        await product.deleteMany();
        await product.create(jsonproducts);
        console.log("success!!!!!!!!");
        process.exit(0);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

start()