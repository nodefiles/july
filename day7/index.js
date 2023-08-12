const express = require("express");
const config = require("./config.json");
const mongoose = require("mongoose");

let app = express();
app.use(express.static(__dirname+"/public"))
app.use(express.json());

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

// READ 
app.get("/data", (req, res)=>{
    console.log("recieved get request");
    User.find()
    .then((dbres)=> res.send(dbres))
    .catch(( err )=> console.log("Error ", err) )
})
// WRITE
app.post("/data", (req, res)=>{
  console.log(req.body);
  let user = new User(req.body);
  user.save()
  .then(saveres => {
    console.log(saveres, "Was Added");
    res.redirect("/");
   })
   .catch(( err )=> console.log("Error ", err) ) 
   });

// UPDATE
app.put("/edit", (req, res)=>{
  console.log("edit recieved", req.body.uid );
  User.findById({ _id : req.body.uid })
  .then( dbres => {
    console.log(dbres);
    res.render( "edit.pug", dbres )
  } )
  .catch(err => console.log("Error ", err))
});

// DELETE
app.delete("/delete", (req, res)=>{
    User.findByIdAndDelete(req.body.uid)
    .then( dbres => {
        if(dbres){
            res.redirect("/");
        }else{
            console.log("error")
        }
    } )
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