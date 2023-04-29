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


// LECTURE: Functions
function describeCountry(country, population, capitalCity){
    var output=`${country} has ${population} peopole and its capital city is ${capitalCity}.`;
    return output;
}
console.log(describeCountry("Bangladesh", 18, "Dhaka"));


// LECTURE: Function Declarations vs. Expressions
var world_population = 7900; 
var c = 18;
function percentagOfWorld1(population){
    return (population/world_population)*100;
}
console.log(`${c} million people, so it's about ${percentagOfWorld1(c)}% of 
the world population.`);



// Arrow function

var calcAge = birthYear => 2037 - birthYear;
var ageCal =  calcAge(2002);
console.log(ageCal);

var newAge = (birthYear, firstName) => {
    var ageNew = 2037 -birthYear;
    var retire = 65-ageNew;
    return `${firstName} retires in ${retire} years`;
}
console.log(newAge(2002, 'Ashiq'));
console.log(newAge(2008, 'Jannat'));