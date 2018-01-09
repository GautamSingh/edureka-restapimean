var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

const route = require('./route/routes');

//connecting to the DB
mongoose.connect('mongodb://localhost:27017/shoppinglist');

//on connection
mongoose.connection.on('connected', ()=>{
    console.log("Mongodb is connected on port: 27017");
});

//on error
mongoose.connection.on('error', (err)=>{
    console.log(err);
});

//adding middlewares -- (1)cors then 
app.use(cors());

//adding moddleware --(2) body -parser
app.use(bodyParser.json());

app.use('/api', route);

app.get('/', (req, res)=>{
    res.send("Need some changes");
});

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('Server is listening on specified :' + PORT);
});