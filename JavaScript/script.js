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
var population = '180 million';
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

// LECTURE: Strings and Template Literals
var portugal = 11.6;
var language_portugal = 'Portuguese';
var continent2 = 'Europe';
var description2 = `Portugal is in ${continent2}, and its ${portugal} million people speaks ${language_portugal}.`;
console.log(description2);

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


// LECTURE: Taking Decisions: if / else Statements
var bangladesh = 18;
if(bangladesh>33) console.log("Bangladesh's population is above average.");
else console.log(`Bangladesh's population is ${33-bangladesh} million below average`);
bangladesh = 13;

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
// fv= prompt("Whats that?");
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


// Folder 3:
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

// Function calling
function cutFruitPiece(fruit){
    return  fruit*4;
}
function fruitProcess(apple, orange){
    var applePieces = cutFruitPiece(apple);
    var orangePieces = cutFruitPiece(orange);
    var juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcess(4,6));

// LECTURE: Functions Calling Other Functions
function describePopulation(country, population){
    var out = `${country} has ${population} million people, which is about ${percentagOfWorld1(population)}% of the world.`;
    return out;
}
console.log(describePopulation("Bangladesh", 180));
console.log(describePopulation("China", 1441));
console.log(describePopulation("Russia", 40));

// Coding Challenge #1
Dolphins1=44; Dolphins2=23; Dolphins3=71; Koalas1=65; Koalas2=54; Koalas3=49;
var avrgDolphins = (Dolphins1 + Dolphins2 + Dolphins3)/3;
var avrgKoalas = (Koalas1 + Koalas2 + Koalas3)/3;

var checkWinner = (team1, team2) => {
    if(team1 >= team2*2){ 
        console.log(`Dolphins win(${avrgDolphins} vs ${avrgKoalas}).`);
    }else if(team1*2 <= team2){
        console.log(`Koalas win(${avrgKoalas} vs ${avrgDolphins}).`);
    }else{
        console.log("No team wins.");
    }
}
// Test 1
checkWinner(avrgDolphins, avrgKoalas);
console.log("Break");

// test 2
Dolphins1=85; Dolphins2=54; Dolphins3=41; Koalas1=23; Koalas2=34; Koalas3=27;
var avrgDolphins = (Dolphins1 + Dolphins2 + Dolphins3)/3;
var avrgKoalas = (Koalas1 + Koalas2 + Koalas3)/3;
checkWinner(avrgDolphins, avrgKoalas);


// Array

var frnds = [ "rony", "Taher" , 'rejon', 'sourov', 'imran', 60];
console.log(frnds);


// LECTURE: Introduction to Arrays
var population = [180, 2210, 370, 34];
console.log(population);
if(population.length == 4) console.log(true);
else console.log(false);

var percentaghes = [`${percentagOfWorld1(180)}%`, `${percentagOfWorld1(2210)}%`, `${percentagOfWorld1(370)}%`, `${percentagOfWorld1(34)}%`];
console.log(percentaghes);


// Basic array operations
var frnds = ["Rony", "Taher", "Rejon"];
frnds.push('Asif'); // add in the back
console.log(frnds);

frnds.unshift("Mahuyan"); // add in the front
console.log(frnds);

frnds.pop(); // removes the last element
console.log(frnds, frnds.length);

frnds.shift(); // removes the first element
console.log(frnds);

console.log(frnds.concat("My name", "Is Ashiq")); // adds the elements from arguments

//console.log(frnds.fill("FIlling with text to all")); // filling all element with this

console.log(frnds.indexOf("Taher"));
console.log(frnds.includes('Rejon'));

if(frnds.includes("Rejon")){
    console.log("You can play games.");
}

//  LECTURE: Basic Array Operations (Methods)

var neighbours = ["India", "Pakistan", "China"];
neighbours.push("Utopia");
neighbours.pop();

if(!neighbours.includes("Germany")){
    console.log("Probably not a central European Country :D");
}
console.log(neighbours.indexOf("India"));
neighbours[0]="Randia";
console.log(neighbours);

// end


// Coding Challenge #2
var bills = [125, 555, 44];
function calcTip(bill){
    var tips;
    if(bill >=50 && bill<=300){
        tips = bill * 0.15;
    }else{
        tips = bill * 0.20;
    }
    return tips;
}

var tip = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tip);
var total = [tip[0]+bills[0],tip[1]+bills[1],tip[2]+bills[2]];
console.log(total);
// end


// Object

// this is the array...
var AshiqArray = [
    'Ashiq',
    'Chester',
    2023-2000,
    'Student',
    ['Rejon', 'Taher', 'Rony']
];

console.log(AshiqArray);


// this is an object 
var AshiqArr = {
    firstName: 'Ashiq',
    nickName: 'Chester',
    age: 2023-2000,
    job: 'Student',
    friends: ['Rejon', 'Taher', 'Rony']
};
console.log(AshiqArr);
console.log(AshiqArr.nickName);
console.log(AshiqArr.friends[2]);

// Array
var myCuntry = [
    'Bangladesh',
    'Dhaka',
    'Bangla',
    180,
    ['India', 'Nepal', 'Bhutan', 'Mayanmar']
]

// LECTURE: Introduction to Objects
var myCuntry = {
    country: 'Bangladesh',
    capital: 'Dhaka',
    language: 'Bangla',
    population: 180,
    neighbours: ['India', 'Nepal', 'Bhutan', 'Mayanmar']
};
console.log(myCuntry);
console.log(myCuntry.country);
console.log(myCuntry.capital);
console.log(myCuntry.neighbours);



// Dot vs Bracket
var myCuntry = {
    firstName: 'Ashiq',
    lastName: 'Chester',
    country: 'Bangladesh',
    capital: 'Dhaka',
    language: 'Bangla',
    population: 180,
    neighbours: ['India', 'Nepal', 'Bhutan', 'Mayanmar']
};
console.log(myCuntry.country); // DOT
console.log(myCuntry['country']); // Bracket

var namKey = 'Name';
console.log(myCuntry['first'+namKey]);
console.log(myCuntry['last'+namKey]);


// LECTURE: Dot vs. Bracket Notation
var myCuntry = {
    country: 'Bangladesh',
    capital: 'Dhaka',
    language: 'Bangla',
    population: 180,
    neighbours: ['India', 'Nepal', 'Bhutan', 'Mayanmar']
};
console.log(`${myCuntry.country} has ${myCuntry.population} million Bangla-speaking people, ${myCuntry.neighbours.length} neighbouring countries and a capital called ${myCuntry.capital}.`);

console.log(`${myCuntry.country} has ${myCuntry.population + 2} million Bangla-speaking people, ${myCuntry.neighbours.length} neighbouring countries and a capital called ${myCuntry.capital}.`);

console.log(`${myCuntry['country']} has ${myCuntry['population']-2} million Bangla-speaking people, ${myCuntry['neighbours']['length']} neighbouring countries and a capital called ${myCuntry['capital']}.`);
// end


// Object methods

var AshiqArr = {
    firstName: 'Ashiq',
    nickName: 'Chester',
    age: 2023-2000,
    birthYear: 2000,
    job: 'Student',
    friends: ['Rejon', 'Taher', 'Rony'],
    hasDriversLicense: true,
    calcAge: function(){
        return 2023 - this.birthYear;
    }
};

console.log(AshiqArr.calcAge(2000));
console.log(AshiqArr['calcAge'](2000));
console.log(AshiqArr.calcAge());

// LECTURE: Object Methods
var myCuntry = {
    country: 'Bangladesh',
    capital: 'Dhaka',
    language: 'Bangla',
    population: 180,
    neighbours: ['India', 'Nepal', 'Bhutan', 'Mayanmar'],
    describe: function(){
        return `${myCuntry.country} has ${myCuntry.population} million Bangla-speaking people, ${myCuntry.neighbours.length} neighbouring countries and a capital called ${myCuntry.capital}.`;
    },
    checkIsland: function(){
        this.isIsland = this.neighbours.length === 0 ? true : false ;
        // way 2
        // this.isIsland = !Boolean(this.neighbours.length);
        return isIsland;
    }
};

console.log(myCuntry.describe());

console.log(myCuntry.checkIsland());

// Challenge
var Ashiq = {
    firstName: 'Ashiq',
    lastName: 'Chester',
    birthYear: 2000,
    age: 2023-birthYear,
    hasDriversLicense: true,
    getSummary: function(){
        return `${this.firstName} is a ${this.age} years old ${AshiqArr.job}, and he has ${this.hasDriversLicense ? "A " : "NO "} driver's license.`;
    }
};
console.log(Ashiq.getSummary());



// Coding Challenge #3

var Mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        return this.mass / this.height**2;
    }
};
 var John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        return this.mass / this.height**2;
    }
};

console.log(Mark.calcBMI()>John.calcBMI() ? `${Mark.firstName}'s BMI (${Mark.calcBMI()}) is higher than ${John.firstName}'s (${John.calcBMI()})!` : `${Mark.firstName}'s BMI (${Mark.calcBMI()}) is higher than ${John.firstName}'s (${John.calcBMI()})!`);

// end

// Iteration the for loop

for(let i=1; i<=10; i++){
    console.log(`Hello ${i}`);
}

// LECTURE: Iteration: The for Loop

for(let i=1; i<=50; i++){
    console.log(`Voter number ${i} is currently voting.`);
}

// Array
var years = [1991, 2007, 1969, 2020];
var ages = [];

for(var i=0; i<5; i++){
    if(typeof(years[i])!=='string'){
        ages.push(2023-years[i]);
        break;
    }
    
}
console.log(age);


// LECTURE: Looping Arrays, Breaking and Continuing

var population = [180, 2210, 370, 34];

var percentaghes = [`${percentagOfWorld1(180)}%`, `${percentagOfWorld1(2210)}%`, `${percentagOfWorld1(370)}%`, `${percentagOfWorld1(34)}%`];
var percentaghes2 = [`${percentagOfWorld1(180)}%`, `${percentagOfWorld1(2210)}%`, `${percentagOfWorld1(370)}%`, `${percentagOfWorld1(34)}%`];
console.log(percentaghes);


// while loop

var dice = Math.trunc(Math.random()*6+1);
console.log(dice);

while(dice !== 6){    
    console.log(dice);
    dice = Math.trunc(Math.random()*6+1);
}


// Coding Challege #4
var calcTip = function (bill){
    return bill>=50 && bill<=300 ? bill*0.15: bill*0.20;
}

var bills = [65,43,568,453,234,67,345,124,85,345,365,26,763,235,69];
var tips = [];
var totals = [];
for(var i =0; i<bills.length; i++){
    var tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip+bills[i]);
}
console.log(bills, tips, totals);