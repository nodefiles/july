const path = require("path");

var linkpath = path.join("assets","config.json");
console.log(linkpath);

var extpath = "C://node-july\\day2\\assets";

var normalPath = path.normalize(extpath);

console.log(normalPath);