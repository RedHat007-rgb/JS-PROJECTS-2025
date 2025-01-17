const Task=require("/Users/basanireddy/Documents/2025/JS-PROJECTS/TASK_MANAGER/models/tasks.js")

const getAllTasks=async (req,res)=>{
   try{
        const tasks=await Task.find({});
        res.status(200).send({tasks});
    }catch{
        res.status(500).send(
           "Sorry,Server is down...PLease try after sometime....."
        )
    }
}


const createTask=async (req,res)=>{
    try{
        const task=await Task.create(req.body);
        res.status(201).send({task});
    }catch{
        res.status(500).send(
           "Please provide the correct task name"
        )
    }
    
    
}

const getTask=async (req,res)=>{
    try{
        const taskId=req.params.id;
        const task=await Task.findOne({_id:taskId});
        if(!task){
            return res.status(404).send("We couldn't find the task....")
        }
        res.status(201).send({task});
    }catch{
        res.status(500).send(
            "Please provide the correct task Id"
        )
    }
}

const updateTask=async (req,res)=>{
    try{
        const taskId=req.params.id;
        const task=await Task.findOneAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            res.status(400).send("We couldn't find the task....");
        }
        res.status(200).send({task})
    }catch{
        res.status(500).send(
            "Please provide the correct task Id"
        )
    }
}

const deleteTask=async (req,res)=>{
    try{
    const taskId=req.params.id;
    const task=await Task.findOneAndDelete({_id:taskId})
    if(!task){
        req.status(404).send("Please prove the coreect task id")
    }

    res.status(200).send({task})
    }catch{
       res.status(500).send(
            "Please provide the correct task Id"
        )
    }
}


module.exports={
    getAllTasks,createTask,getTask,updateTask,deleteTask
}
