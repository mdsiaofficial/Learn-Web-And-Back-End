'use strict';

var bookings = [];
var createBooking = function (flightNum, numPassengers=1, price=1950) {

    // ES6 works directly in the parameters...

    // this is ES5 way...
    // numPassengers = numPassengers || 1;
    // price = price || 1950;


    var booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('BB432', undefined, 1150);


var flight = 'DH324';
var Ashiq = {
    name: 'Ashiq Chester',
    passport: 1234567890,
};

var checkIn = function (flightNum, passenger) {
    flightNum = 'LH669';
    passenger.name = "Mr. " + passenger.name;
    if (passenger.passport === 1234567890) {
        // alert("Checked In");
    } else {
        // alert("Wrong Passport");
    }
    console.log("Inside The Function: ",Ashiq);
    
    
}

console.log(Ashiq);
console.log(flight);
checkIn(flight, Ashiq);
console.log(Ashiq);
console.log(flight);



var newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(Ashiq);
console.log(Ashiq);
checkIn(flight,Ashiq);


// New In cursor
var oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}
console.log(oneWord("I think Ruth's dog is cuter dog than your dog!"));


// Global changing but in a number...
const paragraph = "I think Ruth's dog is cuter dog than your dog!";
let count = 0;

const newParagraph = paragraph.replace(/dog/g, function(match) {
    count++;
    return (count <= 2) ? 'cat' : match;
});

console.log(newParagraph);

//
var upperFirstWord = function (str) {
    var [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}
console.log(upperFirstWord("i think ruth's dog is cuter dog than your dog!"));

// higher order funcion
var transform = function (str, fn) {
    console.log(`Original : ${str}`);
    
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
    
}

transform("i think ruth's dog is cuter dog than your dog!", upperFirstWord);
transform("i think ruth's dog is cuter dog than your dog!", oneWord);


// callback funtion
var high5 = function () {
    console.log("😜");

};
var Ashiq, Jannat, Ammu;
//document.body.addEventListener("click", high5);
//["Ashiq", "Jannat", "Ammu"].forEach(high5);
['Ashiq', 'Jannat', 'Ammu'].forEach(high5);

console.log();
console.log();


var greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
        
    };
};

var gre = greet('Hey');

gre("Ashiq");

greet("Hello")("Ashiq");

// challenge
var greetArr = greetings => names => console.log(`${greetings} ${names}`);

greetArr("Hi")("Ashiq");



var bb = {
    airline: "Biman Bangladesh",
    code: "BB",
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`);
        this.bookings.push({ flight: `${this.code}${flightNum}`, name });
    },

};

bb.book(834, "Chester Ashiq");
bb.book(324, "Rony");
console.log(bb);

var AsiaWings = {
    airline: "AsiaWings",
    code: "AW",
    bookings: [],

};

var book = bb.book;

// does not work
// book(23, "Ashiq");


book.call(AsiaWings, 234, "Ashiq");
console.log(AsiaWings);

book.call(bb, 432, "Shoriful");
console.log(bb);

var SwissAir = {
    airline: "Swiss Air Lines",
    code: "SA",
    bookings: [],
};

book.call(SwissAir, 654, "Anika");
console.log(SwissAir);


// Apply method
var flightData = [345, "Asif Rony"];
book.apply(SwissAir, flightData);
// apply method is not using in modern way..
// theres another way

book.call(SwissAir, ...flightData);
book.call(SwissAir, ...flightData);


// Bind Method

// book.call(AsiaWings, 234, "Ashiq");

var bookBind = book.bind(AsiaWings);
bookBind(876, "Taher");

var bookDC = book.bind(bb);
bookDC(546, "Kabir");
var bookSwiss = book.bind(SwissAir);
bookSwiss(345, "ABU");


// Bind with event listeners
bb.planes = 300;
bb.buyPlane = function () {
    console.log(this);
    
    this.planes++;
    console.log(this.planes);
    
};
// bb.buyPlane();

document.querySelector(".buy").addEventListener("click", bb.buyPlane.bind(bb));

// partial applicatoin
var addTax = (rate, value) => value * value * rate;
console.log(Math.trunc(addTax(1.2, 233)));
var addVat = addTax.bind(null, 0.23);
console.log(Math.trunc(addVat(23)));


// challenge
var Tax = function (rate, value) {
    return function(Vat){
        return (value * value * rate)+Vat;
    }
};
console.log(Tax(1.4,188)(150000));

// my blog thiings //

//way 1

// Define a callback function that takes two arguments
function tryMe(param1, param2) {
    console.log(param1 + " and " + param2);
};
// Define a function that takes a callback as an argument
function callbackTester(callback) {
    // Do some task
    console.log("Testing callback");
    // Invoke the callback function
    callback();
};
// Call the tester function and pass an anonymous function as a callback
callbackTester(function() {
// Pass the arguments to the callback function inside the anonymous function
    tryMe("hello", "goodbye");
});
// The output will be:
// Testing callback
// hello and goodbye


//WAY 2
// Define a callback function that takes two arguments
function tryMe(param1, param2) {
    console.log(param1 + " and " + param2);
};
// Define a function that takes a callback as an argument
function callbackTester(callback) {
    // Do some task
    console.log("Testing callback");
    // Invoke the callback function
    callback();
};
// Call the tester function and pass a bound function as a callback
callbackTester(tryMe.bind(null, "hello", "goodbye"));
// The output will be:
// Testing callback
// hello and goodbye



//