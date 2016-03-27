var http = require('http');
var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('hello world, I am denniss pi!');
  res.end();
});

app.listen(3000, function(){
  console.log('Node server listening on port 3000');
});
