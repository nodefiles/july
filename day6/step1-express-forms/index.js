const express = require("express");
const fs = require("fs");
const data = require("./data/branches.json");

let app = express();
app.use(express.urlencoded({ extended : true }));
// app.set("view engine", "ejs");
let branches = data.branches;

app.get("/", (req, res)=>{
    res.render("home.pug", { branches , company : "My New Company"});
});
app.post("/", (req, res)=>{
    // console.log(req);
    // console.log(req.body);
    // res.end("got your branch name");
    branches.push(req.body.branch);

    let tempdata = {
        "branches" : [...branches]
    };

    /*  
    fs.writeFileSync("data/branches.json", JSON.stringify(tempdata), "utf-8");
    res.redirect("/"); 
    */
   fs.writeFile("data/branches.json",JSON.stringify( tempdata ),"utf-8", function(err){
        if(err){
            console.log("Error ", err);
        }else{
            res.redirect("/");
        }
   })

});

app.listen(5050,"localhost", (error)=> error ? console.log("Error ", error) : console.log("server is now running on localhost:5050"))