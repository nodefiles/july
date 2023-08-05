const express = require("express");
const config = require("./config.json");
const mongoose = require("mongoose");

let app = express();
app.use(express.urlencoded({ extended : true }));

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
.catch(( err )=> console.log("Error ", err) ) */
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
    // console.log(req.body);
   /*  
   User.create(req.body).then(saveres => {
        console.log(saveres.name, "Was Added");
        res.redirect("/");
    })
    .catch(( err )=> console.log("Error ", err) ) 
   */
  let user = new User(req.body);
  user.save()
  .then(saveres => {
    console.log(saveres.name, "Was Added");
    res.redirect("/");
   })
   .catch(( err )=> console.log("Error ", err) ) 
   })

app.listen(config.port,config.host, (error)=>{
    if(error){
        console.log("Error ", error);
    }else{
        console.log("web server is now live on localhost:5050")
    }
});