const express = require('express');
const app = express();




app.get("/",(req,res)=>{
    res.send("This is a home route");
});


app.listen("8080", ()=>{
    console.log("app started");
})