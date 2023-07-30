var app = require("express")();
app.get("/",function(req, res){
    res.write("hello from express !!! ~ !!! ");
    res.end();
});
app.listen(3030,"localhost", error => error ? console.log(error) : console.log("server is now live on localhost:3030"));