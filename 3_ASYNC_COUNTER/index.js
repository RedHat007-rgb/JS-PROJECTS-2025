console.log("I am here");

let global_value;



//let counter=document.getElementById("counter").innerText;





const plus_btn=document.getElementById("plus");
console.log("i am after plus_btn")
plus_btn.addEventListener("click",()=>{
    runtime=document.getElementById("delaytime").value;
    setTimeout(Increment,runtime);
    
});

const minus_btn=document.getElementById("minus");
    minus_btn.addEventListener("click",()=>{
    runtime=document.getElementById("delaytime").value;
    setTimeout(Decrement,runtime);
    
})


function Increment(){
    let global_value=document.getElementById("pluscounter").value;
    let counter=document.getElementById("counter").innerText;
    console.log(global_value);
    new_value=parseInt(counter)+parseInt(global_value);
    console.log(counter)
    console.log(new_value);
     document.getElementById("counter").innerText=new_value;
}

function Decrement(){
    let global_value =document.getElementById("minuscounter").value;
    let counter=document.getElementById("counter").innerText;
    console.log("dec");
    console.log(global_value);
    console.log(counter);
    new_value=parseInt(counter)-parseInt(global_value);

    document.getElementById("counter").innerText=new_value;
}






