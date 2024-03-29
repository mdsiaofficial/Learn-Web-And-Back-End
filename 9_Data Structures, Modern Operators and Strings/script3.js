'use strict';
let weekDays = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];

let openH = {
    [weekDays[2]]: {
        open: 12,
        close: 22,
    },
    [weekDays[4]]: {
        open: 11,
        close: 23,
    },
    [weekDays[5]]: {
        open: 0, // 24 hours open
        close: 24,
    },
};
let restaurant = {
    name: 'Mayer Doa',
    location: 'Rajashon, Savar, Dhaka',
    categories: ['Bangali', 'Sokaler Nasta', 'Bikaler Nasta', 'Dupurer Khabar', 'Rater Khabar'],
    starterMenu: ['Ruti-Porota', 'Dim Vaji', 'Dal-Vaji', 'Dal', 'Puri-Singara', 'Vaji', 'Porota-Misti'],
    mainMenu: ['Vat-Dal', 'Vat-Mas Vaji', 'Vat-Alu Vorta', 'Biriyani', 'Vat-Murgi', 'Vat-Goru'],

    // es6 object literal
    openH,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, address, time = '20:00' }) {
        console.log(`Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);

    },
};

console.log(restaurant);

console.log(restaurant.openH.wed.open);
if (restaurant.openH.wed.open) console.log(restaurant.openH.wed.open);
if (restaurant.openH && restaurant.openH.wed.open) console.log(restaurant.openH.wed.open);




// with optional chaining
console.log(restaurant.openH.mon?.open);
console.log(restaurant.openH?.thu?.close);

for (var days of weekDays) {
    console.log(days);
    var op = restaurant.openH[days]?.open ?? 'Closed';
    // cl = restaurant.openH[days]?.close;
    console.log(`On ${days}, we open at ${op}`);
    //console.log(`On ${days}, we close at ${cl}`);

}
// optional chaining in methods
console.log(restaurant.orderNew?.(0, 1) ?? 'Method does not exit');

// optional chaining in arrays
var users = [{ name: 'Ashiq', email: 'mdsiaofficial' }];
var users2 = [];
console.log(users[0]?.name??'User array is empty.');
console.log(users2[0]?.name??'User array is empty.');



// looping object
var properties = Object.keys(openH);
console.log(properties);
console.log(`We are open on ${properties}.`);
var OpenDays = `We are open on ${properties.length}.`;
console.log(OpenDays);
for (var d of properties) {
    OpenDays += `${d},`;
}
console.log(OpenDays);

for (var day of Object.keys(openH)) {
    console.log(day);
    
}



// optional chaining in property values
var val = Object.values(openH);
console.log(val);


// property entries
console.log(Object.entries(openH));
var entry = (Object.entries(openH));
console.log(entry);

for (var [key, { open, close }] of entry){
    console.log(`On ${key} we open at ${open} and close at ${close}`);

}




// coding challenge #2

// Football Betting App
/* 
    1. loop over game.scored array and print player name with goal number
        ex: "GOAL 1: Harry Kane"
    2. use loop to calculate the avrg odd and print
    3. print 3 odds 
    4. print scores of player
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Real Madrid',
    odds: {
        team1: 4.33,
        draw: 3.25,
        team2: 1.22,
    },
    date: 'Nov 16th, 2023',
    players: [
        [
            'Manuel Neuer',
            'Dayot Upamecano',
            'Min-jae Kim',
            'Bouna Sarr',
            'Noussair Mazraoui',
            'Konrad Laimer',
            'Aleksandar Pavlovic',
            'Serge Gnabry',
            'Harry Kane',
            'Leroy Sane',
            'Thomas Muller',
            // 'Sven Ulreich',
            // 'Alphonso Davies',
            // 'Raphael Guerreiro',
            // 'Frans Kratzig',
        ],
        [
            'Andriy Lunin',
            'Nacho',
            'Antonio Rudiger',
            'Ferland Mendy',
            'Toni Kroos',
            'Federico Valverde',
            'Eduardo Camavinga',
            'Brahim Diaz',
            'Lucas Vazquez',
            'Vinicius Junior',
            'Rodrygo',
            // 'David Alaba',
            // 'Jude Bellingham',
            // 'Dani Carvajal',
            // 'Luka Modric'
        ]
    ],
    score: '1:3',
    scored:
    [
        'Harry Kane',
        'Vinicius Junior',
        'Rodrygo',
        'Vinicius Junior'
    ],

};

// 1. 
for (var [i, player] of game.scored.entries()) {
    console.log(`GOAL ${i+1}: ${player}`);
    
}


//2.
var avrg = 0;
var odds_ = Object.values(game.odds);
for (var o of odds_) {
    avrg += o;
}
avrg = avrg / odds_.length;
console.log(avrg);


// 3.
for (var [team, odd] of Object.entries(game.odds)) {
    var TeamStr = team === 'draw'?'Draw':`${game[team]}`
    console.log(`Odd of victory ${TeamStr}: ${odd}`);
    
}


// 4. 
var scorers = {
};

for (var player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

// -- This is the face of the object after the score count loop:

// var scorers = {
//     'Harry Kane': 1,
//     'Vinicius Junior': 2,
//     'Rodrygo': 1,
// }

console.log(scorers);

for (var [p, s] of Object.entries(scorers)) {
    console.log(`${p}: ${s}`);
    
}

// end of challenge



// Set
const orderSet = new Set([
    'Singara',
    'Puri',
    'Somosa',
    'Singara',
    'Cha',
    'Chola',
    'Puri',
    'Cha',
]);
console.log(orderSet);
console.log(new Set('Ashiq'));
console.log(orderSet.size);
console.log(orderSet.has('Puri'));
console.log(orderSet.has('Ruti'));
orderSet.add('Ruti');
console.log(orderSet);
orderSet.delete('Cha');
console.log(orderSet);
// in set there is no index
console.log(orderSet[3]); // undefined
orderSet.clear();
console.log(orderSet);

for (var ord of orderSet) console.log(ord);

// Example
let staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
let staff_unique = new Set(staff);

let with_new_Staffs1 = ['Store', ...new Set(staff)]; // this is an Array
console.log(with_new_Staffs1);

let with_new_Staffs2 = new Set(['Store', ...new Set(staff)]); // this is new set
console.log(with_new_Staffs2);

console.log(with_new_Staffs1.length); // for array - length
console.log(with_new_Staffs2.size); // for set - size



// Map 

var restMap = new Map();
restMap.set('Name', 'Adorsho Hotel');
restMap.set('Founded', 2022);
restMap.set('Address', 'Savar, Dhaka');
console.log(restMap);

restMap
    .set('Categories', ['Bangali', 'Sokaler Nasta', 'Bikaler Nasta', 'Dupurer Khabar', 'Rater Khabar'])
    .set('starterMenu', ['Ruti-Porota', 'Dim Vaji', 'Dal-Vaji', 'Dal', 'Puri-Singara', 'Vaji', 'Porota-Misti'])
    .set('mainMenu', ['Vat-Dal', 'Vat-Mas Vaji', 'Vat-Alu Vorta', 'Biriyani', 'Vat-Murgi', 'Vat-Goru'])
    .set('open', 11)
    .set('close', 22)
    .set(true, 'We are open :D')
    .set(false, 'We are closed. :(');


console.log(restMap.get('Name'));
console.log(restMap.get(true));
console.log(restMap.get(false));

let time = 23;
console.log(restMap.get(time>restMap.get('open') && time<restMap.get('close')));
console.log(restMap.has('Categories'));

restMap.delete('Address');
console.log(restMap);
console.log(restMap.size);
restMap.clear();
console.log(restMap);


restMap.set([1, 2], 'Test');
console.log(restMap);
console.log(restMap.get([1, 2]));
// this will not work... 
// cause[1, 2] before and[1, 2] in cl is not same..different memory address


// to make it work...
let sset = [3, 4];
restMap.set(sset, 'Test');
console.log(restMap);
console.log(restMap.get(sset)); // this will work..
restMap.set(document.querySelector('h1'), 'Heading');
console.log(restMap);


// new way to map entry:

var ques = new Map([
    ['Question', 'What is the best programming language?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Python'],
    [4, 'Javascript'],
    ['Correct', 3],
    [true, 'Correct ✅'],
    [false, 'Try Again ❌'],
]);

console.log(ques);

// convert obj into map
console.log(Object.entries(openH));
var hoursMap = new Map(Object.entries(openH));
console.log(hoursMap);

console.log(ques.get('Question'));
for (var [k, v] of ques) { 
    if(typeof k==='number') console.log(`Answer ${k}: ${v}`);
    
}

// var ans = Number(prompt('Your answer: '));
// console.log(ans);
// var rightAns = ques.get('Correct');
// console.log(rightAns);
// //ans === rightAns ? console.log(ques.get(true)) : console.log(ques.get(false));
// console.log(ques.get(ans===rightAns));


// convert map to array
console.log(...ques);
console.log(ques.entries());
console.log(...ques.keys());
console.log(...ques.values());

var diss = new Map([
    ['Name', 'Ashiq'],
    ['Age', '23'],
    ['Job', 'Student'],
]);
console.log(diss);


// Coding challege #3
// 1. create an array evnt of different game event no duplicates
// 2.  64 min yellow card unfair, remove it
// 3. print : 'An event happened, on average, every 9 minutes'
// 4. loop over the event and log . Mark 1st or 2nd half.

var Game_Event = new Map([
    [17, 'Goal'],
    [36, 'Sub'],
    [48, 'Goal'],
    [61, 'Sub'],
    [64, 'Yellow Card'],
    [69, 'Red Card'],
    [70, 'Sub'],
    [72, 'Sub'],
    [76, 'Goal'],
    [80, 'Goal'],
    [90, 'Yello Card'],
]);
console.log(Game_Event);

// 1. // set for no duplicate
var Game_Event_Set = new Set(Game_Event.values());
console.log(Game_Event_Set);

// 2. // delete one element
Game_Event.delete(64);
console.log(Game_Event);

// 3. 
console.log(`An event happened, on average, every ${90/Game_Event.size} minutes.`);
console.log(Game_Event.keys());

// 4. // print in 
for (var [k, v] of Game_Event) {
    if(k<45) console.log(`[1st Half] ${k}: ${v}`);
    else console.log(`[2nd Half] ${k}: ${v}`);
    
}



// Work with strings

var Airline = 'Biman Bangladesh';
var plane = 'B750';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B750'[0]);
console.log(Airline.length);
console.log('BimanBD'.length);
console.log(Airline.indexOf('g'));

console.log(Airline.indexOf('Bangladesh'));
console.log(Airline.slice(4));   //n Bangladesh
console.log(Airline.slice(4, 8));   // n Ba
console.log(Airline.slice(-1));   // h
console.log(Airline.slice(3, -3));  // an Banglad

console.log(6, Airline.indexOf('d'));
console.log(Airline.indexOf('d'), 5);


var checkSeat = function (seat) {
    // B and E are Middle 
    var s = (seat.slice(-1) === 'B') || (seat.slice(-1) === 'E') ? (`You are lucky :)`) : (`Sorry :(`);
    console.log(s);
    
};
checkSeat('23B');
checkSeat('23A');
checkSeat('23D');
checkSeat('23E');

console.log(new String('Ashiq'));

var NewS = 'My name IS Ashiq';
console.log(NewS.toLowerCase());
console.log(NewS.toUpperCase());
var nameEE = 'ashiq'
console.log(nameEE[0]+nameEE.slice(1).toUpperCase());

// comparing email
var em = 'ashiq@ashiq.io';
var em2 = 'AsHiq@ashiQ.io';
console.log(em===em2);

em = em.toLowerCase();
em2 = em2.toLowerCase();

console.log(em===em2);

// Replacing
var priceUS = '234.45 $';
console.log(priceUS);

var priceBD = priceUS.replace('$', '\u09F3');
console.log(priceBD);

var Announcement = 'All passangers come to boarding door 23. Boarding door 23!';
console.log(Announcement);
console.log(Announcement.replace('door', 'gate'));

console.log(Announcement.replaceAll('door', 'gate'));

console.log(Announcement.replace(/door/g, 'gate'));


var pp = 'B54 Air Kar';
console.log(pp.includes('B54'));
console.log(pp.includes('Naj'));
console.log(pp.startsWith('B'));

if (pp.startsWith('B') && pp.endsWith('Kar')) {
    console.log('New');
    
} else {
    console.log('Puran');
    
}

// practice

var checkBags = function (items) {
    var i = items.toLowerCase();
    if (i.includes('knife') || i.includes('gun') || i.includes('bomb')) {
        console.log('Not Allowed');
    } else {
        console.log('Allowed');
        
    }
};

checkBags('Laptops, Phone, Charger');
checkBags('Laptops, Phone, Knife');
checkBags('Laptops, Phone, Gun');
checkBags('Laptops, Stove');

console.log('I+am+very+good'.split('+'));
console.log('Md Shoriful Islam Ashiq'.split(' '));

var [firstName, lastName] = 'SI Ashiq'.split(' ');
console.log(firstName,lastName);
var newName = ['MD', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// new 
console.log('___________________________________________');

var capName = function (n) {
    var Names = n.split(' ');
    console.log(Names);
    var NamesUpper = [];

    for (var x of Names) {
        NamesUpper.push(x[0].toUpperCase() + x.slice(1));
        //NamesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(NamesUpper.join(' '));
};

// However, there's a mistake in this line.
// It should be x[0].toUpperCase() + x.slice(1)
// instead of x[0].toUpperCase() + name.slice(1)
// The intention is to capitalize the first letter of each word,
// not the entire input name each time.

capName('md shoriful islam ashiq');
// Names= ['md', 'shoriful', 'islam', 'ashiq'];
// -> After for loop -> NamesUpper =  ['Md', 'Shoriful', 'Islam', 'Ashiq'];
// -> After Join -> NamesUpper =  'Md Shoriful Islam Ashiq';

capName('md abu taher saikat');
capName('asif alom rony');


// Padding
var message = 'GO to gate 44';
console.log(message.padStart(25, '+'));
console.log('Ashiq'.padStart(20,'_'));
console.log('Ashiq'.padStart(20,'_').padEnd(34,'-'));

var AshiqCreditCard = function (number) {
    var Str = number + '';
    return Str.slice(-4).padStart(Str.length,'*');
};
console.log(AshiqCreditCard(232423534534556));
console.log(AshiqCreditCard(253454556));

// Repeat
var msg2 = 'Bad Weather... All departures delayed. ';
console.log(msg2.repeat(5));
var planesInQueue = function (n) {
    console.log(`There are ${n} planes in the queue ${'✈'.repeat(n)}`);
    
};

planesInQueue(9);
planesInQueue(4);
planesInQueue(5);