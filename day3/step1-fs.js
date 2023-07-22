const fs = require("fs");

// write a file
// read a file
// watch a file 

// write file Synchronously
// fs.writeFileSync("temp.txt","there is no turning back","utf-8");
// console.log("file created");

// write file Asynchronously
// fs.writeFile("temp.txt","there is no turning back","utf-8",function(error){
//     if(error){
//         console.log("Error", error);
//     }else{
//         console.log("file was created", "log from line 16");
//     }
// });
// console.log("done", "log in line 19");

// read file Synchronously
// let data = fs.readFileSync("temp.txt","utf-8");

// console.log(data);
// read file Asynchronously
// fs.readFile("temp.txt","utf-8",function(error, data){
//     if(error){
//         console.log("Error", error);
//     }else{
//         console.log(data);
//     }
// });

// console.log("task completed");

// fs.watchFile("temp.txt",function(current, previous){
//     console.log("The Content was ", previous);
//     console.log("++++++++++++++++++++++++++++++++++++++++++");
//     console.log("The Content is ", current);
// });

// fs.mkdirSync("temp");

let writeMyFile = function (){
    fs.writeFile("temp/temp.txt","welcome to your life","utf-8",function(error){
        if(error){ 
            console.log("Error", error)
        }else{
            console.log("File is created");
        }
    })
};

if(fs.existsSync("temp")){
    writeMyFile();
}else{
    fs.mkdirSync("temp");
    writeMyFile();
};



console.log("Job done");
