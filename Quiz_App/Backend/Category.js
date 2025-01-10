import startExam from "./Exam.js";
import fs from "fs";

export default function category(input){
    selectCategory(input);
}

function selectCategory(filename){
    console.log(filename);
    fs.readFile("./Questions/"+filename,"utf-8",(err,data)=>{
        if(data){
            let x=JSON.parse(data);
            startExam(x);
        }else{
            console.log(err);
        }
    })
    
}









