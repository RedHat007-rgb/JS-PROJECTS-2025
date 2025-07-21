const express=require("express");
const router=express.Router();
const {getAllContacts,deleteAllCOntacts,deleteSingtleContact}=require("../controllers/controller.js");
const {getSingleContact,updateContact}=require("../controllers/controller.js");

router.route("/").get(getAllContacts).delete(deleteAllCOntacts);
router.route("/:id").delete(deleteSingtleContact).put(updateContact).get(getSingleContact);

module.exports=router;