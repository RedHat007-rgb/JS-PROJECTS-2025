import express from "express";
const app=express();

let numberOfrequests = {};

setInterval(() => {
    numberOfrequests = {}; // Clear the object every 3 seconds
}, 3000);

const chekka = (req, res, next) => {
    const userid = req.headers["user-id"];
    if (!userid) {
        return res.status(400).json({ msg: "User ID is required." });
    }

    if (!numberOfrequests[userid]) {
        numberOfrequests[userid] = 1;
    } else {
        numberOfrequests[userid]++;
        if (numberOfrequests[userid] > 5) {
            return res.status(429).json({ msg: "Too many requests. Please wait." });
        }
    }
    next();
};

app.use(chekka);


app.get("/1",function(req,res){
    res.json({
        msg:"you hit the server 1",
       
        status:200
    })
})

app.get("/2",function(req,res){
    res.json({
        msg:"you hit the server 2",
        
        status:200
    })
})



app.listen(3000,()=>{
    console.log("server is listening to 3000.")
})