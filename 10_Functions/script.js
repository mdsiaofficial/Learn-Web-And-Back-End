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

}
document.body.addEventListener("click", high5);
["Ashiq", "Jannat", "Ammu"].forEach(high5);