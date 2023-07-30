var express = require("express");
var app = express();
app.use(express.static(__dirname+"/public"));
app.listen(3030,"localhost", error => error ? console.log(error) : console.log("server is now live on localhost:3030"));