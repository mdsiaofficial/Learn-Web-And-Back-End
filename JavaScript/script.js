let js = 'amazing';
// this is used for comment
// if (js==='amazing') alert ('JavaScript is FUN!');
console.log(4+56+5);
5 + 6 + 5;
console.log('Ashiq');
console.log("Ashiq");
console.log(25);
let firstName = "Chester";
let jemin = 45;
console.log(firstName);
console.log(firstName);
console.log(firstName);
firstName= "Ashiq";
console.log(firstName);
let $name=3;
console.log($name);
let name='jannat';
console.log(name);

console.log('9'-'4');
console.log(9-4);
console.log('9-4');
console.log("9-4");

asif = 'asif';
console.log(asif);

let pi = 3.14159;
console.log(pi);



// Assignment  LECTURE: Values and Variables

let country = 'Bangladesh';
let continent = 'Asia';
let population = '180 million';
console.log(country);
console.log(continent);
console.log(population);
// end
 

let a = true;
console.log(a);
console.log(typeof a);
a = 'yes';
console.log(a);
console.log(typeof a);

let ashiq;
let fake;
console.log(typeof ashiq);
console.log(ashiq);
console.log(fake);

ashiq = 'The Name';
console.log(typeof ashiq);

console.log("Break here.");


// Assignment LECTURE: Data Types

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);
// end
 
console.log("Break");

let age = 30;
age = 32;
//let age = 34;
const b = 213;
//b = 3;
//const newvar;

var job = 'programmer';
console.log(job);
job = 'dsa';
var job = 'analyst';
console.log(job);


let val = 10;
val = 11;

var sixx = 6;
var sixx = 'vi';


// Assignment LECTURE: let, const and var
const huge=7;
language = 'Bangla';
language = 'English'; 
//huge = 9;
// Gets error:  Uncaught TypeError: Assignment to constant variable.
// end



const now = 23423;
const then = 2433;
const brk = now - then;
console.log(brk);
console.log(now, then);
let x = 'Ashiq';
let y = 'Two';
let z = x+y;
console.log(z);
console.log(x, y);
z += z;
console.log(z);
z = z + z;
console.log(z);
console.log(x,y);
console.log(x+y);
console.log(x>y);
console.log(x>y ? x : y);

console.log("break");



// Assignment LECTURE: Basic Operators

let bd_population = 180; // in million
let bd_half_population = (bd_population/2);
console.log(bd_population, bd_half_population);

bd_population +=1;
//bd_population = bd_population + 1;
//bd_population++;
console.log(bd_population);

let finland = 6;
let is_bd_large = bd_population > finland;
console.log(is_bd_large);
console.log(bd_population>finland ? "Yes" : "No");

let avrg_population = 33;
console.log(bd_population < avrg_population);
console.log(bd_population < avrg_population ? "Yes" : "No");

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
// end


// Coding Callenge #1
// test 1:
let MarkH = 1.69;
let JohnH = 1.95;
let MarkW = 78;
let JohnW = 92;

let BMI_Mark = MarkW / (MarkH*MarkH);
let BMI_John = JohnW / (JohnH ** 2);

let isMarkHigherBMI = BMI_Mark>BMI_John;
console.log(BMI_Mark, BMI_John, isMarkHigherBMI);

// test 2:
MarkH = 1.88;
JohnH = 1.76;
MarkW = 95;
JohnW = 85;

BMI_Mark = MarkW / (MarkH*MarkH);
BMI_John = JohnW / (JohnH ** 2);

isMarkHigherBMI = BMI_Mark>BMI_John;
console.log(BMI_Mark, BMI_John, isMarkHigherBMI);
// end


// String and Literals:
console.log("Break");
console.log("Break");

var fName = 'Ashiq';
var job = 'student';
var birthYear = 2020;

var Ashiq = "I'm " + fName + ', a ' + (2023-birthYear) + ' years old ' + job + '!';
console.log(Ashiq);

var Ashiq = `I'm ${fName}, a ${2023-birthYear} years old ${job}!`;
console.log(Ashiq);
console.log('This is\nnew');
console.log(`New string 
for 
this.`);


// if else
var Age = 15;
var isOldEnough = Age>=18;

if(isOldEnough){
    console.log("Procceed.");
}else{
    console.log("Reject.");
    console.log(`You are too young. Wait for ${18-Age} years`);
}

// example 2
var birthYear = 1991;
var century;
if(birthYear <= 2000) {
    century = 20;
}else{
    century = 21;
}
console.log(`${century}th century.`);