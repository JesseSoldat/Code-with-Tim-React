var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = 4001;

var app = express();

app.use(express.static(path.join(__dirname, 'client')));


app.listen(port, function(){
	console.log('Server started at port ', port);
});