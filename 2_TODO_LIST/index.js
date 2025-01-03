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
tasks.push(newTask);
console.log("TODO Successfully added");
console.log(tasks);
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

//Toggles task completeion status

function toggleCompletion(title){
    console.log("i am here");
    for (let i=0;i<tasks.length;i++){
        console.log(title);
        if(tasks[i].title==title){ 
            value=tasks[i].completed;
            tasks[i].completed=!value;
        }   
    }
}

addTask("web-03");

toggleCompletion("web-03");
console.log("after toggling");
console.log(tasks)






