'use strict';

const restaurant = {
    name: 'Mayer Doa',
    location: 'Rajashon, Savar, Dhaka',
    categories: ['Bangali','Non-Vegetarian','Vegetarian','Organic'],
    starterMenu: ['Ruti-Porota','Dim Vaji','Dali-Vaji','Dal','Vaji','Porota-Misti'],
    mainMenu: ['Vat-Dal','Vat-Mas Vaji','Vat-Alu Vorta','Biriyani','Vat-Murgi','Vat-Goru'],

    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    }
};


// => Learning 1:
// old way
const food = [2,3,4,3];
const a=food[0];
const b=food[1];
const c=food[2];

// new way
const [x,y,z,i] = food;
console.log(x,y,z,i);
console.log(food);


// => Learning 2:
var [first,second] = restaurant.categories;
console.log(first,second);
// Bangali, Non-Vegetarian

var [first, ,second] = restaurant.categories;
console.log(first,second); 
// middle space place is ignored with the 2nd element of array
// Bangali, Vegetarian


// Learning 3
var [main, ,secondary] = restaurant.categories;
console.log(main,secondary);
// old method to swap
var temp = main;
main = secondary;
secondary = temp;
console.log(main,secondary);

// new method to swap
[main,secondary]=[secondary,main];
console.log(main,secondary);



// order a food
console.log(restaurant.order(1,3));

// We can simply destructure:
var [starter, main] = restaurant.order(4,3);
console.log(starter,main);



// Learning 4: nested
var nested = [2,3,4,6,[35,44,36,66]];
var [q,,w] =nested;
console.log(q,w);

var [e,r,t,h,u,g,s,m] = nested;
console.log(e,r,t,h,u,g,s,m);
// output: 2 3 4 6 [35, 44, 36, 66] undefined undefined undefined

var [ss,ee,rr,tt,[dd,gg,cc,ww]]=nested;
console.log(ss,ee,rr,tt,dd,gg,cc,ww);


// default
var [ae,tr,tw] = [3,5];
console.log(ae,tr,tw);
// 3 5 undefined


// new
var [he=1, tm=1, bh=1] = [6,7];
console.log(he,tm,bh);
// 6 7 1

