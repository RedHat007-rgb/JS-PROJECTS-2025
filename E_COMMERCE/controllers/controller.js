// outer.route("/").get().delete(DeleteAllCOntacts);
// router.route("/:id").delete(deleteSingtleContact).put(updateContact).get(getSingleContact);

const getAllContacts=async(req,res)=>{
    res.send("All contacts")
}

const deleteAllCOntacts=async(req,res)=>{
    res.send("All contacts")
}

const deleteSingtleContact=async(req,res)=>{
    res.send("All contacts")
}

const updateContact=async(req,res)=>{
    res.send("All contacts")
}

const getSingleContact=async(req,res)=>{
    res.send("All contacts")
}

module.exports={getAllContacts,getSingleContact,updateContact,deleteSingtleContact,deleteAllCOntacts}