const EventEmitter = require("events").EventEmitter;
/* 
create an event that gets dispatched once every second for 10 times 
*/

let event = new EventEmitter();

let logHandler = function(evt, times){
    console.log("log event happened at ", evt, times);
}
event.addListener("logevent", logHandler);

let count = 0;

let si = setInterval(function(){
    if(count < 5){
        count++;
        event.emit("logevent", (new Date().getMinutes()+":"+new Date().getSeconds()), count);
    }else{
        clearInterval(si);
        event.removeListener("logevent", logHandler);
        event.emit("logevent", (new Date().getMinutes()+":"+new Date().getSeconds()), count+"line 21");
    }
},1000);
