

const getAllTasks=(req,res)=>{
    res.send("hello, i am in getalltasks");
}


const createTask=(req,res)=>{
    res.send("hello, i am in create task");
}

const getTask=(req,res)=>{
    res.send("hello, i am in get sing task");
}

const updateTask=(req,res)=>{
    res.send("hello, i am in update task");
}

const deleteTask=(req,res)=>{
    res.send("hello, i am in update task");
}


module.exports={
    getAllTasks,createTask,getTask,updateTask,deleteTask
}
