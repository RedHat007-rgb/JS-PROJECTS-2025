const {createTask,getAllTask,getSingleTask,updateTask,deleteTask}=require("../controllers/taskController.js")
const express=require("express");
const router=express.Router();

router.route("/").post(createTask).get(getAllTask);
router.route("/:id").get(getSingleTask).put(updateTask).delete(deleteTask);

module.exports=router;
