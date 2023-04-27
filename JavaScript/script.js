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
var MarkH = 1.69;
var JohnH = 1.95;
var MarkW = 78;
var JohnW = 92;

var BMI_Mark = MarkW / (MarkH*MarkH);
var BMI_John = JohnW / (JohnH ** 2);

var isMarkHigherBMI = BMI_Mark>BMI_John;
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



// Coding challenge #2

// test 1:
var MarkH = 1.69;
var JohnH = 1.95;
var MarkW = 78;
var JohnW = 92;

var BMI_Mark = MarkW / (MarkH*MarkH);
var BMI_John = JohnW / (JohnH ** 2);

var isMarkHigherBMI = BMI_Mark>BMI_John;
console.log(BMI_John>BMI_Mark?"John's BMI is higher than Mark's" : "Mark's BMI is higher than John's");

// test 2:
MarkH = 1.88;
JohnH = 1.76;
MarkW = 95;
JohnW = 85;

BMI_Mark = MarkW / (MarkH*MarkH);
BMI_John = JohnW / (JohnH ** 2);

isMarkHigherBMI = BMI_Mark>BMI_John;
console.log(BMI_John>BMI_Mark?`John's BMI ${BMI_John} is higher than Mark's ${BMI_Mark}!` : `Mark's BMI${BMI_Mark} is higher than John's${BMI_John}!`);
// end



// Type Converstion

var inputYear = '2002';
console.log(Number(inputYear) , inputYear);
console.log(Number(inputYear)+inputYear);
console.log(typeof Number(inputYear));

// type coercion
console.log('I am ' + 23 + ' years old.');
console.log('23' + '10' -3)

// truthy and falsy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean({}));


// Equality Operator
var fv;
//fv= prompt("Whats that?");
console.log(fv);
console.log(typeof fv);
if(fv==23) console.log("I know what!");
else console.log("I don't");


// Logical operators

var hasDriversLicense = true;
var hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense && hasGoodVision ? "Approve" : "Reject");


// Coding Challenge #3
//////////////
// # Test 1 //
//////////////
var Dolphins1 = 96, Dolphins2 = 108, Dolphins3 = 89;
var Koalas1 = 88, Koalas2 = 91, Koalas3 = 110;
var avrgDolphins = (Dolphins1 + Dolphins2 + Dolphins3)/3;
var avrgKoalas = (Koalas1 + Koalas2 + Koalas3)/3;

console.log("Dolphins average: ", avrgDolphins);
console.log("Koalas average: ", avrgKoalas);

if(avrgDolphins>avrgKoalas) console.log("Dolphins Winner");
else if(avrgDolphins<avrgKoalas) console.log("Koalas Winner");
else console.log("Draw");

// Bonus 1
if(avrgDolphins>avrgKoalas && avrgDolphins>=100) console.log("Dolphins Winner");
else if(avrgDolphins<avrgKoalas && avrgKoalas>=100) console.log("Koalas Winner");
else console.log("Draw");

// Bonus 2
if(avrgDolphins>avrgKoalas && avrgDolphins>=100) console.log("Dolphins Winner");
else if(avrgDolphins<avrgKoalas && avrgKoalas>=100) console.log("Koalas Winner");
else if(avrgKoalas===avrgDolphins && avrgDolphins>=100)  console.log("Both team win");
else console.log("NO team wins");

/////////////////
// # Test Bonus 1
/////////////////
var Dolphins1 = 97, Dolphins2 = 112, Dolphins3 = 101;
var Koalas1 = 109, Koalas2 = 95, Koalas3 = 123;
var avrgDolphins = (Dolphins1 + Dolphins2 + Dolphins3)/3;
var avrgKoalas = (Koalas1 + Koalas2 + Koalas3)/3;

console.log("Dolphins average: ", avrgDolphins);
console.log("Koalas average: ", avrgKoalas);

if(avrgDolphins>avrgKoalas) console.log("Dolphins Winner");
else if(avrgDolphins<avrgKoalas) console.log("Koalas Winner");
else console.log("Draw");

// Bonus 1
if(avrgDolphins>avrgKoalas && avrgDolphins>=100) console.log("Dolphins Winner");
else if(avrgDolphins<avrgKoalas && avrgKoalas>=100) console.log("Koalas Winner");
else console.log("Draw");

// Bonus 2
if(avrgDolphins>avrgKoalas && avrgDolphins>=100) console.log("Dolphins Winner");
else if(avrgDolphins<avrgKoalas && avrgKoalas>=100) console.log("Koalas Winner");
else if(avrgKoalas===avrgDolphins && avrgDolphins>=100)  console.log("Both team win");
else console.log("NO team wins");

/////////////////
// # Test Bonus 2
/////////////////
var Dolphins1 = 97, Dolphins2 = 112, Dolphins3 = 101;
var Koalas1 = 109, Koalas2 = 95, Koalas3 = 106;
var avrgDolphins = (Dolphins1 + Dolphins2 + Dolphins3)/3;
var avrgKoalas = (Koalas1 + Koalas2 + Koalas3)/3;

console.log("Dolphins average: ", avrgDolphins);
console.log("Koalas average: ", avrgKoalas);

if(avrgDolphins>avrgKoalas) console.log("Dolphins Winner");
else if(avrgDolphins<avrgKoalas) console.log("Koalas Winner");
else console.log("Draw");

// Bonus 1
if(avrgDolphins>avrgKoalas && avrgDolphins>=100) console.log("Dolphins Winner");
else if(avrgDolphins<avrgKoalas && avrgKoalas>=100) console.log("Koalas Winner");
else console.log("Draw");

// Bonus 2
if(avrgDolphins>avrgKoalas && avrgDolphins>=100) console.log("Dolphins Winner");
else if(avrgDolphins<avrgKoalas && avrgKoalas>=100) console.log("Koalas Winner");
else if(avrgKoalas===avrgDolphins && avrgDolphins>=100)  console.log("Both team win");
else console.log("NO team wins");


// Coding Challenge # 4

/////////
// test 1
/////////

var  bill = 275;
var tips;

if(bill>=50 && bill<=300){
    tips = (bill * (15/100)) ;
}else if(bill>300){
    tips = (bill * (20/100));   
}

var tip = (bill>=50 && bill<=300) ? (bill * (15/100)) : (bill * (20/100));
console.log(bill, tips);
console.log(bill, tip);

/////////
// test 2
/////////

var  bill = 40;
var tips;

if(bill>=50 && bill<=300){
    tips = (bill * (15/100)) ;
}else if(bill>300){
    tips = (bill * (20/100));   
}

var tip = (bill>=50 && bill<=300) ? (bill * (15/100)) : (bill * (20/100));
console.log(bill, tips);
console.log(bill, tip);

/////////
// test 3
/////////

var  bill = 430;
var tips;

if(bill>=50 && bill<=300){
    tips = (bill * (15/100)) ;
}else if(bill>300){
    tips = (bill * (20/100));   
}

var tip = (bill>=50 && bill<=300) ? (bill * (15/100)) : (bill * (20/100));
console.log(bill, tips);
console.log(bill, tip);