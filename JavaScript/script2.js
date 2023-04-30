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
var per1 = percentagOfWorld1(18);
var per2 = percentagOfWorld1(180);
var per3 = percentagOfWorld1(1492);

console.log(`${c} million people, so it's about ${percentagOfWorld1(c)}% of 
the world population.`);
console.log(per1,per2,per3);


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


// LECTURE: Arrow Functions
var percentagOfWorld3 = (population) => {
    return (population/world_population)*100;
}

console.log(percentagOfWorld3(19));


// LECTURE: Functions Calling Other Functions
function describePopulation(country, population){
    var out = `${country} has ${population} million people, which is about ${percentagOfWorld3(population)}% of the world.`;
    return out;
}