let tasks=[];//initializing an empty array

const task={
    id:1,
    title:"My First steps to learn Web-dev",
    completedOn:"2025-01-03",
    completedat:null
}

tasks=[task];


//Adding Task

function addTask(newTitle){
let newTask={
    id:Math.random(),
    title:newTitle,
    completed:false,
    createdOn:Date(),
    createdAt:Date.now()
}
let value=newTask.createdOn;
Edited_value=value.substring(4,16)
console.log(newTitle + " TODO Successfully added " + Edited_value);
tasks.push(newTask);
// let new_array=[...tasks];
// new_array.push(newTask);
}



function deleteTask(title){
    for (let i=0;i<tasks.length;i++){
        if(title===tasks[i].title){
            delete tasks[i];
        }
    }
    console.log("TODO has been deleted");
    console.log(tasks);
}

console.log("************************************************************");


//Toggles task completeion status

function toggleCompletion(title){
    for (let i=0;i<tasks.length;i++){
        if(tasks[i].title==title){
            tasks[i].completed=!tasks[i].completed;
            console.log(tasks[i].title + " has been marked completed");
        }
        
    }
}

console.log("************************************************************");

//Display all task

function listAllTaks(){
    
    for (let i=0;i<tasks.length;i++){
        counter=i+1;
        console.log("🐢 " + counter + ". " + tasks[i].title);
    }
}
console.log("************************************************************");

// Displaying completed TODO
function listCompletedTasks(){
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].completed==true){
            console.log("************* Completed Todo's ***********");
            console.log("✅", tasks[i].title + " has been completed ");
        }
        
    }
}

console.log("************************************************************");

// Displaying incomplete todo

function listPendingTasks(){
    
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].completed==false){
        console.log("👀👀", tasks[i].title + " is still pending in yout TODO,S list."); 
        }
        
    }
}


addTask("angular");
addTask("javascript");
addTask("minicooper");
console.log("************************************************************");
toggleCompletion("angular");
console.log("************************************************************");
listAllTaks();
console.log("************************************************************");
listCompletedTasks();
console.log("************************************************************");
listPendingTasks();






