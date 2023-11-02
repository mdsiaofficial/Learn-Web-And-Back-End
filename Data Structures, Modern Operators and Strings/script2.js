let restaurant = {
    name: 'Mayer Doa',
    location: 'Rajashon, Savar, Dhaka',
    categories: ['Bangali', 'Sokaler Nasta', 'Bikaler Nasta', 'Dupurer Khabar', 'Rater Khabar'],
    starterMenu: ['Ruti-Porota', 'Dim Vaji', 'Dali-Vaji', 'Dal', 'Puri-Singara', 'Vaji', 'Porota-Misti'],
    mainMenu: ['Vat-Dal', 'Vat-Mas Vaji', 'Vat-Alu Vorta', 'Biriyani', 'Vat-Murgi', 'Vat-Goru'],

    openingHour: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // 24 hours open
            close: 24,
        },
    },

    order: function (starterIndex,mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex=1,mainIndex=0,address,time='20:00'}) {
        console.log(`Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
        
    }
};





// Common Operator
const Arr = [ 7, 8, 9];
const badNewArray = [1, 2, Arr[0], Arr[1], Arr[2]];
console.log(badNewArray);

//Spread operator
const newArr = [5, 56, ...Arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Morog Polao', 'Kacchi'];
console.log(newMenu);

// Join two arrays.
var ab = [2, 4, 6, 7, 9];
var bc = [4, 6, 9, 0, 5];
var cd = [...ab, ...bc];
console.log(cd);

// Iterables: arrays, strings, maps, sets, NOT object
var str = 'Ashiq';
var letter = [...str, ' ', 'S.'];
console.log(letter);
console.log(...str);
// console.log(`${...str}`); // that will not work.
//var ingredients = [prompt('Let\' make pasta! Ingredient 1?'), prompt('Let\' make pasta! Ingredient 2?'), prompt('Let\' make pasta! Ingredient 3?')];
//console.log(ingredients);

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // old
//restaurant.orderPasta(...ingredients); // new

// Objects 
var newRestaurant = {
    foundedIN: 2010, ...restaurant, founder: "Ashiq"
};
console.log(newRestaurant);
var restaurantCpy = { ...restaurant };
restaurantCpy.name = 'Allar Dan Biriyani';
newRestaurant.name='Bismillah Hotel'
console.log(restaurant.name);
console.log(restaurantCpy.name);
console.log(newRestaurant.name);


restaurant.orderDelivery({
    time: '22:30',
    address: 'City University',
    mainIndex: 2,
    starterIndex: 4,
});
// After setting some of default values
restaurant.orderDelivery({
    address: 'City University',
});

let { name, openingHour, categories } = restaurant;
console.log(name, openingHour, categories);

let { name: restaurantName, openingHour: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// default values
let {menu =[], starterMenu: starters=[]}=restaurant;
console.log(menu,starters);

// Mutating variables
let a=444;
let b=666;
let obj={a:34, b:64, c:94};
// {a,b}=obj; // this will produce an error.
({ a, b } = obj);
console.log(a,b);

// Nested objects
const { fri } = openingHour;
console.log(fri);
// {open: 11, close: 23}
const { fri: { open:o, close:c } } = openingHour;
console.log(o,c);
// 11 23

