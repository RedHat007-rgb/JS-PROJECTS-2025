const express=require("express");
const { signup, signin, todo, todos } = require("../controllers/controller");
const router=express.Router();

router.route("/signup").post(signup);
router.route("/login").get(signin);
router.route("/todo").get(todo);
router.route("/todos").post(todos);


module.exports=router;