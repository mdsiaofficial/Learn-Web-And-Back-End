var flight = '_Delayed_Departure;fao9344;txl2134;11:23+_Arrival;Aru5323;fao9344;11:56+_Delayed_Arrival;hel2344;fao9344;12:40+_Departure;fao9344324;lis2342;12:55';

// Delayed Departure from FAO to TXL (11h23m)
//          Arrival from BRU to FAO (11h56m)
// Delayed Arrival from HEL to FAO (12h40m)
//          Departure from FAO to LIS (12h55m)

var all_flights = flight.split('+');
console.log(all_flights);
var flight_details;


function getFlightCode(str) {
    return str.toUpperCase().slice(0, 3);
};
// same thing normal function and arrow function
var flight_Code = str => str.toUpperCase().slice(0, 3);

var ok_or_not = str => str.startsWith('_Delayed') ? '❌' : '✅';
for (var x of all_flights) {
    //console.log(x);
    var [type, from, to, time] = x.split(';');
    //console.log(type,from,to,time);
    flight_details = `${ok_or_not(type)}${type.replaceAll('_', ' ')} from ${getFlightCode(from)} to ${getFlightCode(to)} (${time.replace(':','h')}m)`;
    console.log(flight_details);
    
    
}