'use strict';

var hasDriversLicense = false;
var passTest =  true;

if(passTest) hasDriversLicense = true; console.log("Do it");

// function

function logger(){

    console.log("Here!!!");
}
logger();

function greet(name){
    var greet  = `Hi ${name}, How are you?`;
    return greet;
}
console.log(greet("Ashiq"));

function blender(apple, banana, orange){
    var juice = `Making a juice with ${apple} apples, ${banana} bananas and ${orange} oranges.`;
    return juice;
}

console.log(blender(5,3,3));


