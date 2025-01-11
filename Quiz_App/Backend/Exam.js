let StorageArray=[];

export default function startExam(questions){
    randomGenerator(questions);
}




function randomGenerator(questions){
    while(StorageArray.length<20){
    let number=Math.floor((Math.random(questions)*questions.length));
    console.log("randomnumber"+number);
    pushingArray(questions,number);
}
}

function pushingArray(questions,num){
    if(StorageArray.includes(questions[num].id)==true){
        console.log("indie includes.........");
        randomGenerator(questions);
    }else{
        console.log("insideelse in push......")
        StorageArray.push(questions[num].id);
        console.log(StorageArray);
        console.log("length............"+ StorageArray.length);
        console.log(questions[num].question);
        randomGenerator(questions);
    }
}


















