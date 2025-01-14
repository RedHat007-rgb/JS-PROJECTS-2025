import {getcontroller,getSingleController,deleteController,createController} from "./controllers/controller.js"
import express from "express"
const app=express();


app.use(express.json());

 app.get("/",getcontroller);
console.log("inside index")
app.get("/todo",getSingleController);
app.delete("/delete",deleteController);
app.post("/create",createController);




app.listen(3000,()=>{
    console.log("server is listening to 3000")
})



