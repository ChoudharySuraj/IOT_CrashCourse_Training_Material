var car = { 
name:"Honda",
type:"hatchback",
color:"Red"


};

console.log("===================JSObject=============");
console.log(car);
console.log("===================JSObject.value=============");
console.log(car.name);
console.log(car.type);
console.log(car.color);
console.log("===================JSONObject=============");
console.log(JSON.stringify(car));

var JSONCar = JSON.stringify(car);

console.log("===================JSONObject.value=============");
console.log(JSONCar.name);


console.log("===================JSONObject to JS object=============");
var JScar = JSON.parse(JSONCar);
console.log(JScar.name);
console.log(JScar.type);
console.log(JScar.color);
