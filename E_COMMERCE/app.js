require("dotenv").config();
const express=require("express");
const routes=require("./Routes/routes.js");
const connect=require("./db/db.js");
const app=express();
const port=process.env.PORT;
const URL=process.env.URL;


app.use(express.json());


app.use("/",routes);



app.listen(port, async ()=>{
    
    console.log(`server is listening to ${port}.......`);
    await connect(URL);
    console.log("successfully .... connected to DB.......");

})