const express = require("express");
let app = express();
let company = "My Company";
let branches = ["New York", "Bangalore", "Pune", "Delhi"];

app.get("/",(req, res)=>{
    // res.send("hello there");
    res.render("home.pug",{ company, branches } );
    //  res.render("home.ejs",{ company, branches } );
    // res.render("home.pug");
})
app.listen(4040,"localhost",(error)=>{
    if(error){ console.log("Error ", error) }
    else{ console.log("web server is now ready on localhost:4040") }
})