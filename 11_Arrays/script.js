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




// username counter 
var count = 0;

// users
var usernames = [];
let acc01 = {
    owner: "Chester Ashiq",
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
var label_Welcome = document.querySelector(".welcome");
var label_Date = document.querySelector(".date");
var label_Balance = document.querySelector(".balance_value");
var label_Sum_In = document.querySelector(".summary_value_in");
var label_Sum_Out = document.querySelector(".summary_value_out");
var label_Sum_Interest = document.querySelector(".summary_value_interest");
var label_Timer = document.querySelector(".timer");

var containerApp = document.querySelector(".app");
var containerMove = document.querySelector(".movements");
var btn_log_in = document.querySelector(".login_btn");
var btn_Transfer = document.querySelector(".form_btm_tranfer");
var btn_Loan = document.querySelector(".form_btn_loan");
var btn_Close = document.querySelector(".form_btn_close");
var btn_Sort = document.querySelector(".form_btn_sort");

var input_login_username = document.querySelector(".login_input_user");
var input_login_pin = document.querySelector(".login_input_pin");
var input_Transfer_to = document.querySelector(".form_input_to");
var input_Transfer_Amount = document.querySelector(".form_input_amount");
var input_Loan_Amount = document.querySelector(".form_input_loan_amount");
var input_Close_Username = document.querySelector(".form_input_user");
var input_Close_pin = document.querySelector(".form_input_pin");

// tk symble in html : &#2547 in javascript : \u09F3

var displayMove = function (move) {
    containerMove.innerHTML = "";
    // .textContent = 0
    move.forEach(function (x, i) {
        var type = x > 0 ? "deposit" : "withdrawal";
        var html = `
        <div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${x}\u09F3</div>
        </div>
        `;
        containerMove.insertAdjacentHTML("afterbegin", html);
    });
};

displayMove(acc01.mov);
// console.log(containerMove.innerHTML);



// challenge array 1 //
var checkDogs = function (ageArrayJulia, ageArrayKate) {
    var copyJulia = ageArrayJulia.slice(1, -2);
    // console.log(copyJulia);
    var copyKate = ageArrayKate;

    copyJulia.forEach(function (x, i, arr) {
        var dog = (x > 3) ? `an Adult` : `a Pupppy`;
        console.log(`Julia: Dog ${i+1} is ${dog}, and is ${x} years old.`);
        
    });
    copyKate.forEach(function (x, i, arr) {
        var dog = (x > 3) ? `an Adult` : `a Pupppy`;
        console.log(`Kate: Dog ${i+1} is ${dog}, and is ${x} years old.`);
        
    });
};
var JuliyaReport = [5, 3, 2, 6, 1, 4, 3, 6, 2];
var KateReport = [2, 6, 3, 1, 4, 4, 1, 3, 5, 2, 4, 5, 7, 3, 2];
checkDogs(JuliyaReport, KateReport);
// challenge end //


// practice map //
/*
var mov = [90, 43, 12, -23, 42, 88, -25, -11];
var euro_to_usd = 1.27;

var usd = mov.map( x => x * euro_to_usd);
   
// var usd = mov.map(function (x) {
//     return x * euro_to_usd;
//     // return 100;
// });
console.log(mov , usd);


var gbp = [];
for (var x of usd) {
    gbp.push(x * 0.92);
};
console.log(gbp);

var mov_des = mov.map((x, i, arr) => {
    if (mov > 0) {
        return `Move ${i + 1}: You deposited ${Math.abs(x)}`;
    } else {
        return `Move ${i + 1}: You withdrew ${Math.abs(x)}`;
    }
});

console.log(mov_des);
*/


// Making username for bankist //
/*
var user = "Chester Ashiq";
var create_Username = function (user) {
    var username = user.toLowerCase().split(" ").map(function (str) {
        return str[0];
    }).join("") + count++;
    return username;
};
*/

    1
console.log(create_Username(user));

var createUsernames = function (accs) {
    accs.forEach(function (acc,i) {
        acc.username = acc.owner.toLowerCase().split(" ").map(u => u[0]).join("");
        if (usernames == acc.username) acc.username + count++;
    });
};
createUsernames(accounts);
console.log(accounts);