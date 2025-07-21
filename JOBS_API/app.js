// [] get connection string
// [] setup .env with MONGO_URL variable and assign the value
// [] import 'dotenv' and setup package
// [] import connect() and invoke in the starter
// [] restart the server
// [] mongoose V6 info

const express = require('express');
const app = express();

const start = ()=> {
    app.listen(5001,()=>{
        console.log(`Server is listening on port 5001 ...`)
    })
}

start();