const fs=require("fs");

fs.readFile("a.txt","utf-8",(err,data)=>{
    if(data){
        const string =data;
        let print="";
        for(let i=0;i<string.length;i++){
            if(string[i]==" "){
                console.log(string[i]);
                console.log(print);
            }else{
                print=print+string[i];
            } 
        } 
    }else{
        console.log(err);
    }
})




