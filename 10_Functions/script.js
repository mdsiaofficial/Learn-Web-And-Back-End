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
