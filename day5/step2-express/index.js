const express = require("express");
let app = express();
app.use("/assets", express.static(__dirname+"/images"));
app.use(express.static(__dirname));
app.listen(3030,"localhost", error => error ? console.log(error) : console.log("server is now live on localhost:3030"));