var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
.then(() =>{
    console.log('Connected')
})
.catch(err =>{
    console.log('Not Connected')
})


app.get("/", (req, res)=>{
    res.send("This is the Homepage");
})

app.get("/about", (req, res)=>{
    res.send("This is the About page");
})

//Listening for request on port 3000
app.listen(3000, ()=> {
    console.log("Server Listening on Port 3000");
})