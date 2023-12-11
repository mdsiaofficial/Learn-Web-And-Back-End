let arr = ["a", "b", "c", "d", "e"];

// SLICE of array
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(2, -1));

// use spread
console.log(...arr);

// splice
console.log(arr.splice(2));
console.log(arr.splice(-1));

console.log(arr);
// splice deletes the taken items


// with arrays
var x = [2, 3, 4, 5, 6, 7, 8, 9];
var y = [2, 3, 4, 5, 6, 7, 8, 9];

y.reverse(); // [9, 8, 7, 6, 5, 4, 3, 2]
console.log(x.reverse());
console.log(y);
console.log(x.reverse());

console.log(x.concat(y));
console.log(x);
console.log(y);

console.log(...x, ...y);
var letterXY = x + y;
console.log(typeof letterXY); // String
// console.log(letterXY.join("-"));
// this cannot output. cause join method not works on Array

var letters = x.concat(y);
console.log(typeof letters); // Array/Object
console.log(letters.join("-"));


// new js in array

var newArr = [43, 23, 12];
console.log(newArr[0]);
console.log(newArr.at(0)); // new

console.log(newArr[newArr.length-1]);
console.log("Ashiq".at(0));



// looping
var movement = [34, -45, 40, -60, 30, 65, -13, 70, 23];
for (var x of movement) {
    if (x > 0) {
        console.log(`you deposit ${x}`);
        
    } else {
        console.log(`you withdraw ${Math.abs(x)} `);
        
    }
    
    
}

console.log("------------other-------------");

var movement = [34, -45, 40, -60, 30, 65, -13, 70, 23];
for (var [i, x] of movement.entries()) {
    if (x > 0) {
        console.log(`${i+1} you deposit ${x}`);
        
    } else {
        console.log(`${i+1} you withdraw ${Math.abs(x)} `);
        
    }
}


// using forEach method
console.log("------------forEach-------------");


var movement = [34, -45, 40, -60, 30, 65, -13, 70, 23];
movement.forEach(function (movement) {
    if (movement > 0) {
        console.log(`you deposit ${movement}`);
        
    } else {
        console.log(`you withdraw ${Math.abs(movement)} `);
        
    }
});


// using forEach method
console.log("------------other forEach-------------");


var movement = [34, -45, 40, -60, 30, 65, -13, 70, 23];
movement.forEach(function (x, i, arr) {
    if (movement > 0) {
        console.log(`${i+1} you deposit ${x} - ${arr}`);
        
    } else {
        console.log(`${i+1} you withdraw ${Math.abs(x)} - ${arr}`);
        
    }
});




var currencies = new Map([

    ["BDT", "Bangladesh Taka"],
    ["EUR", "Euro"],
    ["GBP", "Pound Sterling"],
    ["USD", "United States Dollar"],
]);

currencies.forEach(function (value, key, Map) {
   console.log(`${key}: ${value}`);
    
});


var currenciesUnique = new Set(["BDT", "EUR", "GBP", "USD"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value) {
    console.log(`${value}`);
    
});



let acc01 = {
    owner: "Ashiq Chester",
    mov: [94, 43, 12, -23, 35, 49, -25, -11],
    interestRate: 1.2, // 1.2%
    pin: 1111,
};
let acc02 = {
    owner: "Asif Rony",
    mov: [20, -15, 12, -23, 42, -25, -25, -11],
    interestRate: 1.2, // 1.2%
    pin: 2222,
};
let acc03 = {
    owner: "Taher Saikat",
    mov: [30, 43, 48, -23, 42, 49, -25, -11],
    interestRate: 1.2, // 1.2%
    pin: 3333,
};
let acc04 = {
    owner: "Anika Jannat",
    mov: [5, 43, 12, -23, 42, -17, -25, -11],
    interestRate: 1.2, // 1.2%
    pin: 4444,
};
let acc05 = {
    owner: "Ammu",
    mov: [45, 43, -12, -23, 65, 49, -25, -11],
    interestRate: 1.2, // 1.2%
    pin: 5555,
};
let acc06 = {
    owner: "Abbu",
    mov: [55, 43, 12, -23, 42, 88, -25, -11],
    interestRate: 1.2, // 1.2%
    pin: 6666,
};

// accounts //
var accounts = [acc01, acc02, acc03, acc04, acc05, acc06];


// elements //

