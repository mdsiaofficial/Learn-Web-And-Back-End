let arr = ["a", "b", "c", "d", "e"];

// SLICE of array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(2, -1));

// use spread
console.log(...arr);

// splice
console.log(arr.splice(2));
console.log(arr.splice(-1));

console.log(arr);
// splice deletes the taken items 🆘🆘🆘🆘🆘🆘🆘🆘


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

console.log(newArr[newArr.length - 1]);
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
        console.log(`${i + 1} you deposit ${x}`);

    } else {
        console.log(`${i + 1} you withdraw ${Math.abs(x)} `);

    }
}


// using forEach method 🆘🆘🆘🆘🆘🆘🆘🆘
console.log("------------forEach-------------");


var movement = [34, -45, 40, -60, 30, 65, -13, 70, 23];
movement.forEach(function (movement) {
    if (movement > 0) {
        console.log(`you deposit ${movement}`);

    } else {
        console.log(`you withdraw ${Math.abs(movement)} `);

    }
});


// using forEach method 🆘🆘🆘🆘🆘🆘🆘🆘
console.log("------------other forEach-------------");


var movement = [34, -45, 40, -60, 30, 65, -13, 70, 23];
movement.forEach(function (x, i, arr) {
    if (movement > 0) {
        console.log(`${i + 1} you deposit ${x} - ${arr}`);

    } else {
        console.log(`${i + 1} you withdraw ${Math.abs(x)} - ${arr}`);

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




// challenge array 1 // 🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘
var checkDogs = function (ageArrayJulia, ageArrayKate) {
    var copyJulia = ageArrayJulia.slice(1, -2);
    // console.log(copyJulia);
    var copyKate = ageArrayKate;

    copyJulia.forEach(function (x, i, arr) {
        var dog = (x > 3) ? `an Adult` : `a Pupppy`;
        console.log(`Julia: Dog ${i + 1} is ${dog}, and is ${x} years old.`);

    });
    copyKate.forEach(function (x, i, arr) {
        var dog = (x > 3) ? `an Adult` : `a Pupppy`;
        console.log(`Kate: Dog ${i + 1} is ${dog}, and is ${x} years old.`);

    });
};
var JuliyaReport = [5, 3, 2, 6, 1, 4, 3, 6, 2];
var KateReport = [2, 6, 3, 1, 4, 4, 1, 3, 5];
checkDogs(JuliyaReport, KateReport);
// challenge end //


// practice map // 🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘
var mov = [90, 43, 12, -23, 42, 88, -25, -11];
var eur_to_usd = 1.0896;
var eur_to_bdt = 119.5786;
var bdt_to_usd = 0.0091;
var bdt_to_eur = 0.0084;
var usd_to_eur = 0.9178
var usd_to_bdt = 109.75;

var usd = mov.map(x => x * eur_to_usd);

// var usd = mov.map(function (x) {
//     return x * eur_to_usd;
//     // return 100;
// });
console.log(mov, usd);
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









// Filter movement array // 🆘🆘🆘🆘🆘🆘🆘🆘
var depo = movement.filter(function (m) {
    return m > 0;
});
console.log(movement);
console.log(depo);

var depo_2 = [];
for (var m of movement) {
    if (m > 0) depo_2.push(m);
}
console.log(movement);
console.log(depo_2);

var wdraw = movement.filter(function (m) {
    return m < 0;
});
console.log(movement);
console.log(wdraw);


// Reduce with accumulator //🆘🆘🆘🆘🆘🆘🆘🆘
var b = movement.reduce(function (accu, cur, i, arr) {
    console.log(`Iteration ${i}: ${accu}`);

    return accu + cur;
}, 0);
console.log(b);

// code decreased
var b = movement.reduce((accu, cur) => (accu + cur), 0);
console.log(b);
// another way with for loop
var bal = 0;
for (var x of movement) bal += x;
console.log(bal);


// Find maximum: //🆘🆘🆘🆘🆘🆘🆘🆘
var max = movement.reduce((accu, mov) => {
    if (accu > mov) {
        return accu;
    } else {
        return mov;
    }
}, movement[0]);
console.log(max);




// Challenge 2 // 🆘🆘🆘🆘🆘🆘🆘🆘
var calcAvrgHumanAge = function (ages) {
    var HumanAges = [];
    // converting dog ages into human ages with calculation
    ages.forEach(function (d_age, i) {
        if (d_age <= 2) HumanAges[i] = d_age * 2;
        else HumanAges[i] = 16 + d_age * 4;
    });

    console.log(HumanAges);


    // excluding all ages less than 18 years old
    var ExcludedAge = HumanAges.filter(age => (age >= 18));
    console.log(ExcludedAge);

    // Average human age
    var total = HumanAges.reduce((accu, curr) => (accu + curr));
    var AvrgAge = Math.trunc(total / HumanAges.length);
    console.log(AvrgAge);

};

calcAvrgHumanAge(JuliyaReport);
console.log("__________");

calcAvrgHumanAge(KateReport);
// end //



// Chaining method // 🆘🆘🆘🆘🆘🆘🆘🆘
console.log(movement);
var totalDepoUSD = movement
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {
        // console.log(arr);
        return mov * bdt_to_usd
    })
    // .map((mov => mov * bdt_to_usd_))
    .reduce((accu, mov) => accu + mov, 0)
    .toFixed(2);
console.log(totalDepoUSD);
// Chaining method end //


// Challenge 3 // 🆘🆘🆘🆘🆘🆘🆘🆘
var calcAvrgHumanAge = function (ages) {
    // applying chaining method
    var len = ages.length;
    var HumanAges = ages
        .map((d_age) => (d_age <= 2 ? d_age * 2 : 16 + d_age * 4))
        .filter(age => (age >= 18))
        // .reduce((accu, curr) => (accu + curr), 0);
        .reduce((accu, curr, i, arr) => (accu + curr/arr.length), 0);
    
    // var avrg = (HumanAges / len).toFixed(2);
    console.log(HumanAges);
    
    // var HumanAges = [];
    // converting dog ages into human ages with calculation
    // excluding all ages less than 18 years old
    // Average human age
};

var bb = [5, 2, 4, 1, 15, 8, 3];

calcAvrgHumanAge(JuliyaReport);
console.log("__________");
calcAvrgHumanAge(KateReport);
calcAvrgHumanAge(bb);
// end //


// using find method // 🆘🆘🆘🆘🆘🆘🆘🆘
// var ghh = accounts.find(acc => acc.owner == "Chester Ashiq");
// console.log(ghh.mov);

// some array methods : includes() 🆘🆘🆘🆘🆘
console.log(movement);
console.log(movement.includes(-13));


// Some() method
var x = movement.some(mov => mov > 70);
console.log(x);

// Every() method
var y = movement.every(mov => mov >= 20);
console.log(y);


// Separe callback🆘🆘🆘
var de = mov => mov > 0;
console.log(movement.some(de));
console.log(movement.every(de));
console.log(movement.filter(de));

// flat method flatMap()    🆘🆘🆘🆘🆘

var newArr = [[1, 2, 3], [3, 4, 5], [5, 6, 7]];
console.log(newArr.flat());
var newArr = [[[1, 2], 3], [3, [4, 5]], [5, 6, 7]];
console.log(newArr);
console.log(newArr.flat(1));

var x = movement.map(m => m);
console.log(x);

var overall = movement.map(m => m).flat().reduce((acc, m) => acc + m, 0);
console.log(overall);



// Sorting array // 🆘🆘🆘🆘🆘
var ow = ["Shimul", "Taher", "Rony", "Janna", "Ashiq", "Amena", "Kabir"];
console.log(ow);
console.log(ow.sort());
console.log(ow);
console.log(ow.reverse());
console.log(ow);

console.log(ow.sort((a,b) => b-a));

console.log(movement);

// Ascending Sorting
movement.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
});
console.log(movement);

// Descending Sorting
movement.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    
});
console.log(movement);

// Descending Sorting
movement.sort((a, b) => a - b);
console.log(movement);




// ✅✅✅ Project ✅✅✅ //

// username counter 
var count = 0;

// users
let usernames = new Set();
// Insert a single value in the set
// usernames.add('newUsername');

// Accounts Obj // ✅✅✅✅✅

let acc01 = {
    acc: "acc01",
    owner: "Chester Ashiq",
    mov: [94, 43, 12, -23, 35, 49, -25, -11, 34, -45, 40, -60, 30, 65, -13, 70, 23],
    interestRate: 1.2, // 1.2%
    pin: 1111,
};
let acc02 = {
    acc: "acc02",
    owner: "Asif Rony",
    mov: [20, -15, 12, 23,  25, -25, -11, 42, 34, -45, 40, -60, 30, 65, -13, 70, 23],
    interestRate: 1.8, // 1.2%
    pin: 2222,
};
let acc03 = {
    acc: "acc03",
    owner: "Taher Saikat",
    mov: [30, 43, 48, -25, -11, -23, 42, 49, 34, -45, 40, -60, 30, 65, -13, 70, 23],
    interestRate: 2.2, // 1.2%
    pin: 3333,
};
let acc04 = {
    acc: "acc04",
    owner: "Anika Jannat",
    mov: [5, 43, 12, -23, 42, -17, -25, -11, 34, -45, 40, -60, 30, 65, -13, 70, 23],
    interestRate: 1.4, // 1.2%
    pin: 4444,
};
let acc05 = {
    acc: "acc05",
    owner: "Ammu",
    mov: [45, 43, -12, -23, 49, -25, -11, 65, 34, -45, 40, -60, 30, 65, -13, 70, 23],
    interestRate: 1.9, // 1.2%
    pin: 5555,
};
let acc06 = {
    acc: "acc06",
    owner: "Abbu",
    mov: [55, 43, -23, 42, 88, -25, -11, 12, 34, -45, 40, -60, 30, 65, -13, 70, 23],
    interestRate: 1.5, // 1.2%
    pin: 6666,
};
let acc07 = {
    acc: "acc07",
    owner: "Shama Fariha",
    mov: [67, 25, 59, -90, 74, 55, -15, -19, 34, -45, 40, -60, 30, 65, -13, 70, 23],
    interestRate: 2.8, // 1.2%
    pin: 7777,
};
let acc08 = {
    acc: "acc08",
    owner: "Tapos Biswas",
    mov: [-45, 40, -30, 74, -15, -19, 95, 34, -45, 40, -60, 30, 65, -13, 70, 23],
    interestRate: 3.5, // 1.2%
    pin: 8888,
};
let acc09 = {
    acc: "acc09",
    owner: "Arafat Ovi",
    mov: [67, 25, 59, -60, 30, 65, -13, 70, 23, 34, -45, 40, -60, 30, 65, -13, 70, 23],
    interestRate: 1.7, // 1.2%
    pin: 9999,
};
let acc10 = {
    acc: "acc10",
    owner: "Fahad Chor",
    mov: [36, -28, 43, -40, 27, 32, -28, 40, 49, 34, -45, 40, -60, 30, 65, -13, 70, 23],
    interestRate: 4.2, // 1.2%
    pin: 1010,
};
let acc11 = {
    acc: "acc11",
    owner: "Sazzadul Shimul",
    mov: [51, -53, 22, 86, 91, 44, -23, -6, 32, 34, -45, 40, -60, 30, 65, -13, 70, 23],
    interestRate: 4.5, // 1.2%
    pin: 1111,
};


// accounts // ✅✅✅✅✅✅
var accounts = [acc01, acc02, acc03, acc04, acc05, acc06, acc07, acc08, acc09, acc10, acc11];

// Elements ✅✅✅✅✅

const labelName = document.querySelector(".account_holder_name");
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// tk symble in html : &#2547 in javascript : \u09F3

// Display Every Movement of Wallet  // ✅✅✅✅✅
var displayMove = function (move, sort=false) {
    containerMovements.innerHTML = "";
    // .textContent = 0

    var mov = sort ? move.slice().sort((a, b) => (a - b)) : move;
    mov.forEach(function (x, i) {
        var type = x > 0 ? "deposit" : "withdrawal";
        var html = `
        <div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${x} \u09F3</div>
        </div>
        `;
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};
// console.log(containerMove.innerHTML);

// Making username for bankist //
/*
var user = "Chester Ashiq";
var create_Username = function (user) {
    var username = user.toLowerCase().split(" ").map(function (str) {
        return str[0];
    }).join("") + count++;
    return username;
};
console.log(create_Username(user));
*/


// Making unique username for bankist // ✅✅✅✅✅✅
var createUsernames = function (accounts) {
    accounts.forEach(function (acc, i) {
        acc.username = acc.owner.toLowerCase().split(" ").map(u => u[0]).join("");
        if (usernames.has(acc.username)) {
            acc.username = acc.username + count++;
            usernames.add(acc.username);
        } else {
            usernames.add(acc.username);
        }
    });
};
createUsernames(accounts);
// console.log(accounts);
// console.log(usernames);

// Display The Balance // ✅✅✅✅✅✅✅✅✅✅✅✅
var calcDisplayBalance = function (acc) {
    var balance = acc.mov.reduce((accu, cur) => (accu + cur), 0).toFixed(2);
    acc.balance = balance;
    labelBalance.textContent = `${acc.balance} \u09F3`;
};

// Display The Summary // ✅✅✅✅✅✅✅✅✅✅✅✅
var calcDisplaySummary = function (acc) {
    // Incoming Summary
    var incomes =(acc.mov)
        .filter(mov => mov > 0)
        .reduce((accu, mov) => (accu + mov), 0)
        .toFixed(2);
    labelSumIn.textContent = `${incomes} \u09F3`;

    // Outgoing Summary
    var out = (acc.mov)
        .filter(mov => mov < 0)
        .reduce((accu, mov) => (accu + mov), 0);
    out = Math.abs(out).toFixed(2);
    labelSumOut.textContent = `${out} \u09F3`;

    // Interest Summary
    var interest = (acc.mov)
        .filter(mov => mov > 0)
        .map(depo => depo * acc.interestRate / 100)
        .filter((int, i, arr) => int >= 1) // this outs the value behind 1
        .reduce((accu, intrst) => (accu + intrst), 0)
        .toFixed(2);
    labelSumInterest.textContent = `${interest} \u09F3`;
};



// Clear Input Fields after login / logout / failed login ✅✅✅✅
var clearFields = function () {
    inputLoginPin.value = inputLoginUsername.value = "";
    inputLoginPin.blur();
    inputLoginUsername.blur();
};


// Display all things // ✅✅✅✅✅
var displayAccount = function (acc) {
    // labelName.textContent = `${acc.owner}`;
    // display UI and welcome msg...
    labelWelcome.innerHTML = `Welcome back, <span class="account_holder_name">${acc.owner}</span>`;
    // labelWelcome.textContent = `Welcome back, ${current_account.owner.split(" ")[0]}`;
    containerApp.style.opacity = 100;
    displayMove(acc.mov);
    calcDisplayBalance(acc);
    calcDisplaySummary(acc);
    
    // CLEAR INPUT FIELDS
    clearFields();


};

// Update the ui after some calculation // ✅✅✅✅✅
var updateUI = function (acc) {
    displayMove(acc.mov);
    calcDisplayBalance(acc);
    calcDisplaySummary(acc);
}
// taking input from promt //
// var inp = prompt("account: ");
// var acc = accounts.find(acc => acc.acc == inp);
// displayAccount(acc01);


// Displaying things after Login // ✅✅✅✅
// verify the log in credential
// Event handler : button
var current_account;
btnLogin.addEventListener("click", function (ev) {
    // prevent form from submitting
    ev.preventDefault();
    current_account = accounts.find(acc => acc.username === inputLoginUsername.value);
    if (current_account?.pin === Number(inputLoginPin.value)) {
        // previously created this funtion for displaying all things
        displayAccount(current_account);
        console.log(current_account.mov);
    } else {
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
    
        // Show the modal
        modal.style.display = "block";
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        
        // clearing fields
        inputLoginPin.value = "";
        inputLoginPin.blur();
        
    }
    
});

// Transfer ammount to other profile // ✅✅✅✅
btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    var ammount = Number(inputTransferAmount.value);
    var receiverAcc = accounts.find(acc => acc.username === (inputTransferTo.value));

    console.log(ammount, receiverAcc);
    
    // check that amount be in the account or not //
    if (ammount > 0 && receiverAcc && current_account.balance>=ammount && receiverAcc?.username!==current_account.username) {
        // console.log("Transer valid.");
        current_account.mov.push(-ammount);
        receiverAcc.mov.push(ammount);
        displayAccount(current_account);
        // updateUI(current_account);
        inputTransferAmount.value = inputTransferTo.value = "";
        inputTransferAmount.blur();
        inputTransferTo.blur(); 
    }
});


// Close account // ✅✅✅✅
btnClose.addEventListener("click", function (e) {
    e.preventDefault();

    if (inputCloseUsername.value === current_account.username && Number(inputClosePin.value) === current_account.pin) {
        var index = accounts.findIndex(acc => acc.username === current_account.username);
        accounts.splice(index, 1);
        console.log(accounts);
        // console.log(index);
        
        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = "";
    inputCloseUsername.blur();
    inputClosePin.blur(); 

});

let sorted = false;
// Sorting Movements of money // ✅✅✅✅✅✅✅
btnSort.addEventListener("click", function (e) {
    e.preventDefault();
    displayMove(current_account.mov, !sorted);
    sorted = !sorted;
});


// Take loan ✅✅✅✅
btnLoan.addEventListener("click", function (e) {
    e.preventDefault();

    var amount = Number(inputLoanAmount.value);
    // only when 10% of single deposit 
    if (amount > 0 && current_account.mov.some(mo => mo >= amount * 0.1)) {
        // add movements
        current_account.mov.push(amount);

        // update ui
        updateUI(current_account);
    }
})


// ✅✅✅ Project End ✅✅✅ //