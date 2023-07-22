const http = require("node:http");
const fs = require("node:fs");

let server = http.createServer((req, res)=>{
    console.log(req.url);
    fs.readFile("index.html","utf-8",(fileError, fileData)=>{
        if(fileError){
            console.log("Error ", fileError);
            res.writeHead(404,{
                "Content-Type" : "text/plain"
            });
            res.write("Error Happened");
        }else{
            res.writeHead(200,{
                "Content-Type" : "text/html"
            });
            res.write(fileData);
        }
        res.end();
    })
});

server.listen(3030,"localhost",error => error ? console.log("Error ", error) : console.log("Server is no live on localhost:3030"))