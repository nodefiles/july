var express = require("express");

var app = express();

app.get("/",function(req, res){
    res.write("hello from express !!! ~ !!! ");
    res.end();
});

/* 
app.post();
app.put();
app.delete(); 
*/

/*
let instance = app.listen();
console.log("Express is now live on localhost:"+instance.address().port); 
*/

app.listen(3030,"localhost", error => error ? console.log(error) : console.log("server is now live on localhost:3030"));