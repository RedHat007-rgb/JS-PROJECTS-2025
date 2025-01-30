const Task=require("../models/model");
const  createTask=async (req,res)=>{
    const title=req.body.title;
    const description=req.body.description;
    const status=req.body.status;
    const duedate=req.body.duedate;
    await Task.create({
        title:title,
        description:description,
        status:status,
        duedate:duedate
    })
    res.status(200).send("task created successfully......")
}

const getAllTask=(req,res)=>{
    res
}

const getSingleTask=(req,res)=>{

}

const updateTask=(req,res)=>{

}

const deleteTask=(req,res)=>{

}


module.exports={
    createTask,deleteTask,updateTask,getSingleTask,getAllTask
}