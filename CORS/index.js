const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({

}));

app.use(express.json());

app.post("/sum", (req, res) => {
    
    let a = parseInt(req.body.a); 
    let b = parseInt(req.body.b);
    
    res.status(200).json({
        answer: a + b  
    });
});

app.listen(3001, () => {
    console.log("Server is running on 3000.......");
});
