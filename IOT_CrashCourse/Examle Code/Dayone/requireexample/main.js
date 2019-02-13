var mydate = require("./foo.js");
console.log(mydate.myDateTime());

setInterval(function(){
console.log(mydate.myDateTime());
},1000);