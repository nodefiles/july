var express = require("express");
var app = express();

/* 
app.get("/default",function(req, res){
    // res.write("hello from express !!! ~ !!! ~ !!!");
    // res.end(); 
    res.send("hello from express !!! ~ !!! ~ !!!");
    
});
*/

app
.get("/favicon.ico", function(req, res, next){
    res.sendFile("");
    next();
})
.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
})
.get("/about", function(req, res){
    res.sendFile(__dirname+"/about.html");
})
.get("/contact", function(req, res){
    res.sendFile(__dirname+"/contact.html");
})

app.listen(3030,"localhost", error => error ? console.log(error) : console.log("server is now live on localhost:3030"));