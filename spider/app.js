var express = require('express');
var app = express();
var request = require('request');

app.get('/',function(req,res){
    res.send('hello world');
    res.send('test nodemon');
});

app.listen(3000);