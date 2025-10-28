require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');




//connection with mongo db

const db_url = process.env.MONGO_URL;

main()
.then(()=>{
    console.log("database  connected");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(db_url);
}












app.get("/",(req,res)=>{
    res.send("This is a home route");
});


app.listen("8080", ()=>{
    console.log("app started");
})