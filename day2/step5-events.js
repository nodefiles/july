const EventEmitter = require("events").EventEmitter;

let evtEmitter = new EventEmitter();

let listener1 = function(msg, greeting){
    console.log("listener1 got the event", msg, greeting);
};

let listener2 = function(){
    console.log("listener2 got the event");
};

let listener3 = function(){
    console.log("listener3 got the event called newevent");
};

evtEmitter.addListener("myevent", listener1);
evtEmitter.addListener("myevent", listener2);
evtEmitter.addListener("newevent", listener3);

evtEmitter.emit("myevent", "log from 21","hello");

evtEmitter.removeListener("myevent", listener2);

evtEmitter.emit("myevent", "log from 25","hi");
evtEmitter.emit("myevent", "log from 26","hey");
evtEmitter.emit("myevent", "log from 27","ola");
// -------------------------

evtEmitter.emit("newevent");
evtEmitter.emit("newevent");