import { getAlltodos , getSingleTodo,deleteTodo } from "../services/services.js";

export async function getcontroller(req,res){
    try{
        let data=await getAlltodos();
        res.status(200).send(data);
    }catch{
        res.status(500).send("sorry, We are down.....");
    }

}

export  async function getSingleController(req,res){
    try{
        let id=req.body.id;
        console.log(id);
        console.log("inside controller")
        let data= await getSingleTodo(id);
        res.status(200).send(data);
    }catch{
        res.status(500).send("sorry, We are down.....");
    }
}

export async function deleteController(req,res){
    try{
        let id=req.body.id;
        let data= await deleteTodo(id);
        res.status(200).send(data);
    }catch{
        res.status(500).send("sorry, We are down.....");
    }
    
}


export function createController(req,res){

}