let restaurant = {
    name: 'Mayer Doa',
    location: 'Rajashon, Savar, Dhaka',
    categories: ['Bangali', 'Sokaler Nasta', 'Bikaler Nasta', 'Dupurer Khabar', 'Rater Khabar'],
    starterMenu: ['Ruti-Porota', 'Dim Vaji', 'Dal-Vaji', 'Dal', 'Puri-Singara', 'Vaji', 'Porota-Misti'],
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
//var ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')];
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

// spread, becauseon right size of = 
const arrr = [1, 2, ...[3, 4]];
const [aaa, bbb, ...others] = [1, 2, 3, 4, 5];
console.log(arrr);

console.log(a, b, others);

const [Ruti, , Dal, Biriyani, ...othersFood]=[...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(Ruti, Dal);


// function
const addd = function (...numbers) {
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum);
    
};
addd(2, 3);
addd(2, 4, 6);
addd(4, 6, 8, 0, 6, 4);



// short circuiting
// OR
console.log(3 || 'ashiq');
console.log('' || 'ashiq');
console.log(' ' || 'ashiq');
console.log(true || 0);
console.log(undefined || null);
// even though null is a falsy value but it will out NULL
console.log(null || true);
console.log(undefined || 0 || '' || 'ashiq' || 23);

// AND

console.log(0 && 'ashiq');
console.log('' && 'ashiq');
console.log(' ' && 'ashiq');
console.log('ashiq' && 45 && null && 'dsf');
if (restaurant.orderPizza) {
    console.log('ye');
    
} else {
    console.log('no');
    
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spicy');



restaurant.Guests = 0;
const gus = restaurant.Guests || 10;
console.log(gus);

// Nullish coalescing operator...  ignores NULL or Undefined
const gusRight = restaurant.Guests ?? 10;
console.log(gusRight);



const rest1 = {
    name: 'Allar Dan',
    Guests: 20,
};

const rest2 = {
    name: 'Dhaka Biriyani',
    Owner: 'Abu Taher',
};

// rest1.Guests = rest1.Guests || 54;
// rest2.Guests = rest2.Guests || 32;
// rest2.Guests ||= 77;
rest2.Guests ??= 44;

rest2.Owner &&= 'Anon';
console.log(rest1);
console.log(rest2);



// Coding Challenge #1

// Football Betting App
/* 
    1. Create Player array for each team - player1 , player2
    2. two var, gk and fieldPlayers
    3. allPlayers = 22 player
    4. after substitute: new player list- player1Final, player2final 
*/