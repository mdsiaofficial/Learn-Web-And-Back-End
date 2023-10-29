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

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

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
({a,b}=obj);
console.log(a,b);

