import { readFile } from "fs"


const getData=async (req,res)=>{
    let filename=document.getElementById("filename").value;
    await readFile("/Users/basanireddy/Documents/2025/JS-PROJECTS/BUN_EXPERIMENT/files"+filename,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data);
        }
    })
    document.getElementById("info").innerText=data;


}

module.exports= {getData};