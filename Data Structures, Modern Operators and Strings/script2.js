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
};

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

