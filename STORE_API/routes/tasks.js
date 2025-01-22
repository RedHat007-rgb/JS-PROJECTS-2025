const express=require("express");
const router=express.Router();
const tasks=require("/Users/basanireddy/Documents/2025/JS-PROJECTS/STORE_API/controllers/tasks.js")
router.route("/").get(tasks.getAllProducts);
router.route("/static").get(tasks.getProductStatic);
module.exports=router;