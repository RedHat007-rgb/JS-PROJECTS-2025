require("./db/connect.js")
const express=require("express");
const app=express();
const port=3000;
const tasks=require("./routes/tasks.js");
const connectdb = require("./db/connect.js");
require("dotenv").config();

//middleware to access the the info from the client...
app.use(express.json());

app.use(express.static("/Users/basanireddy/Documents/2025/JS-PROJECTS/TASK_MANAGER/public"));

app.use("/v1/tasks",tasks);

// app.get("/v1/tasks");
// app.post("/v1/tasks");
// app.delete("/v1/tasks/:id");
// app.put("/v1/task/:id");
// app.get("/v1/tasks/:id")

const start= async function (){
    await connectdb(process.env.MONGO_URI);
    app.listen(port,()=>{
    console.log("Server is listening to 3000")
    })
}

start();


