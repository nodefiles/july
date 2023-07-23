const http = require("node:http");
const fs = require("node:fs");

let companyArray = ["Google","Dell","Intellipaat","Arcstellar"];
let mycompany = companyArray[Math.round(Math.random() * 3)-1];

let server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == "/favicon.ico"){
        res.write("");
        res.end();
    }else if(req.url == "/"){
        fs.readFile("index.html","utf-8",function(fileError, fileData){
            if(fileError){
                res.writeHead(404,{
                    "Content-Type" : "text/plain"
                });
                console.log("Error ", fileError);
                res.write("Error Happened");
                res.end();
            }else{
                res.writeHead(200,{
                    "Content-Type" : "text/html"
                });
                res.write(fileData.replace("{{company}}", mycompany));
                res.end();
            }
        })
    }else{
        // console.log(req.url);
        // req.url.split("/")[1]
        fs.readFile(req.url.replace("/",""),"utf-8",function(fileError, fileData){
            if(fileError){
                res.writeHead(404,{
                    "Content-Type" : "text/plain"
                });
                console.log("Error ", fileError);
                res.write("Error Happened");
                res.end();
            }else{
                res.writeHead(200,{
                    "Content-Type" : "text/html"
                });
                res.write(fileData.replace("{{company}}", mycompany));
                res.end();
            }
        })
    }
    
   
});
server.listen(3030,"localhost",error => error ? console.log("Error ", error) : console.log("Server is no live on localhost:3030"))