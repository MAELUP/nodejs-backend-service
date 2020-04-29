var express = require('express');
var app = express();
var fs = require("fs"); //read user.json

//get all user
app.get('/getUsers', function(req, res){
    fs.readFile( __dirname + "/" + "user.json", 'utf8' , function (err,data){
	console.log(data);
	res.end(data);
    });
});

app.get('/_getUsers', function(req, res){
    fs.readFile( __dirname + "/" + "user.json", 'utf8' , function (err,data){
        console.log(data);
        res.end(data);
    });
});

app.listen(8081, () => {
  console.log('Application is running on port 8081')
})