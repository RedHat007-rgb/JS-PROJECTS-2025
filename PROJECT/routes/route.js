const express=require("express");
const { signup, login, profile } = require("../controllers");
const authentication = require("../middlewares/auth");

const router=express.Router();



router.route("/").post(signup);
router.route("/login").get(login);
router.route("/profile").get(authentication,profile);

module.exports=router;
