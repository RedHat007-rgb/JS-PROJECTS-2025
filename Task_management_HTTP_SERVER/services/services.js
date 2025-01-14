
export async function getAlltodos(){
    let data=await fetch("https://jsonplaceholder.typicode.com/posts");
    const response=await data.json();
    return response;
}

export async function getSingleTodo(id){
    console.log("inside service");
    
    console.log("https://jsonplaceholder.typicode.com/posts/"+id)
    let data=await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
    const response=await data.json();
    return response;
}


export async function deleteTodo(id){
    let data=await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    const response=await data.json();
    return "post has been deleted";


}
