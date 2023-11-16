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

