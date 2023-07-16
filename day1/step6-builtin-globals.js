// console.log(__filename);// will log the current file name
// console.log(__dirname);// will log the current directory name

// schedule a function to be called after 2 sec 
// async 
// setTimeout(function(){
//     console.log("command in line 7");
// }, 2000);

// clearTimeout()

// console.log("command in line 10");

var count = 0;
var si = setInterval(function(){
    if(count < 5){
        count++;
        console.log("command for ", count);
    }else{
        clearInterval(si);
    } 
}, 1000);




