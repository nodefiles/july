const http = require("node:http");

let server = http.createServer(function(req, res){
    res.writeHead(200,{
        "Content-Type" : "text/html",
        "Author" : "Vijay"
    });
    res.write("<h1> Hello There Again </h1>");
    res.end();
});

server.listen(2020,"localhost",function(err){
    if(err){
        console.log("Error ", err);
    }else{
        console.log("Web Server is now running");
    }
});


// MERN
// MEAN