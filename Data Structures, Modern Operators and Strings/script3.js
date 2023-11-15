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



// property values
var val = Object.values(openH);
console.log(val);
