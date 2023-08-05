const express = require("express");
const config = require("./config.json");
const mongoose = require("mongoose");

let app = express();
app.use(express.urlencoded({ extended : true }));
app.use(express.static(__dirname));

// db config
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let User = mongoose.model("User", new Schema({
    id : ObjectId,
    name : String,
    age : String,
    city : String
}));

mongoose.connect(config.cloudDB)
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log("Error ", err)
})


// CREATE
/* let user = new User({
    name : "Ironman",
    age : 27,
    city : "New York"
});
user.save()
.then(saveres => console.log(saveres.name, "Was Added"))
.catch(( err )=> console.log("Error ", err) )  */
// READ 
/* User.find()
.then((dbres)=> console.log(dbres))
.catch(( err )=> console.log("Error ", err) ) */

// UPDATE
// DELETE

app.get("/", (req, res)=>{
    User.find()
    .then((dbres)=> res.render("home.pug", { users : dbres }))
    .catch(( err )=> console.log("Error ", err) )
})
app.post("/", (req, res)=>{
  console.log(req.body);
  let user = new User(req.body);
  user.save()
  .then(saveres => {
    console.log(saveres, "Was Added");
    res.redirect("/");
   })
   .catch(( err )=> console.log("Error ", err) ) 
   })
app.post("/edit", (req, res)=>{
  console.log("edit recieved", req.body.uid );
  User.findById({ _id : req.body.uid })
  .then( dbres => {
    console.log(dbres);
    res.render( "edit.pug", dbres )
  } )
  .catch(err => console.log("Error ", err))
})
app.post("/delete", (req, res)=>{
    User.findByIdAndDelete(req.body.uid)
    .then( dbres => res.redirect("/") )
    .catch(err => console.log(err))
    // console.log("delete request ",req.body);
})

app.listen(config.port,config.host, (error)=>{
    if(error){
        console.log("Error ", error);
    }else{
        console.log("web server is now live on localhost:5050")
    }
});