const express=require("express");
const router=express.Router();
const tasks=require("../controllers/tasks.js")

router.route("/").get(tasks.getAllTasks).post(tasks.createTask);
router.route("/:id").delete(tasks.deleteTask).patch(tasks.updateTask).get(tasks.getTask);

module.exports=router;