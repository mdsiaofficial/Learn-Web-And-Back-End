
// ✅✅✅ Bankist Application ✅✅✅ //
// ✅✅✅ Project ✅✅✅ //
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
    mov: [94, 43, 12, -23, 35,],
    interestRate: 1.2, // 1.2%
    pin: 1111,
    movDates: [
        "2023-11-18T21:31:17.17Z",
        "2023-11-18T21:31:17.17Z",
        "2023-11-18T21:31:17.17Z",
        "2023-12-29T21:18:17.17Z",
        "2023-12-30T21:18:17.17Z",
    ],
    currency: "BDT",
    locale: "bn-BD",
};
let acc02 = {
    acc: "acc02",
    owner: "Asif Rony",
    mov: [20, -15, 12, 23,  25,],
    interestRate: 1.8, // 1.2%
    pin: 2222,
    movDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
    ],
    currency: "BDT",
    locale: "bn-BD",
};
let acc03 = {
    acc: "acc03",
    owner: "Taher Saikat",
    mov: [30, 43, 48, -25, -11,],
    interestRate: 2.2, // 1.2%
    pin: 3333,
    movDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
    ],
    currency: "BDT",
    locale: "bn-BD",
};
let acc04 = {
    acc: "acc04",
    owner: "Anika Jannat",
    mov: [5, 43, 12, -23, 42,],
    interestRate: 1.4, // 1.2%
    pin: 4444,
    movDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
    ],
    currency: "BDT",
    locale: "bn-BD",
};
let acc05 = {
    acc: "acc05",
    owner: "Ammu",
    mov: [45, 43, -12, -23, 49,],
    interestRate: 1.9, // 1.2%
    pin: 5555,
    movDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
    ],
    currency: "BDT",
    locale: "bn-BD",
};
let acc06 = {
    acc: "acc06",
    owner: "Abbu",
    mov: [55, 43, -23, 42, 88,],
    interestRate: 1.5, // 1.2%
    pin: 6666,
    movDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
    ],
    currency: "BDT",
    locale: "bn-BD",
};
let acc07 = {
    acc: "acc07",
    owner: "Shama Fariha",
    mov: [67, 25, 59, -90, 74,],
    interestRate: 2.8, // 1.2%
    pin: 7777,
    movDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
    ],
    currency: "BDT",
    locale: "bn-BD",
};
let acc08 = {
    acc: "acc08",
    owner: "Tapos Biswas",
    mov: [-45, 40, -30, 74, -15,],
    interestRate: 3.5, // 1.2%
    pin: 8888,
    movDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
    ],
    currency: "BDT",
    locale: "bn-BD",
};
let acc09 = {
    acc: "acc09",
    owner: "Arafat Ovi",
    mov: [67, 25, 59, -60, 30,],
    interestRate: 1.7, // 1.2%
    pin: 9999,
    movDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
    ],
    currency: "BDT",
    locale: "bn-BD",
};
let acc10 = {
    acc: "acc10",
    owner: "Fahad Chor",
    mov: [36, -28, 43, -40, 27,],
    interestRate: 4.2, // 1.2%
    pin: 1010,
    movDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
    ],
    currency: "BDT",
    locale: "bn-BD",
};
let acc11 = {
    acc: "acc11",
    owner: "Sazzadul Shimul",
    mov: [51, -53, 22, 86, 91,],
    interestRate: 4.5, // 1.2%
    pin: 1111,
    movDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
    ],
    currency: "BDT",
    locale: "bn-BD",
};
let acc12 = {
    acc: "acc12",
    owner: "Jonas Schemdman",
    mov: [51, -53, 22, 86, 91,],
    interestRate: 4.5, // 1.2%
    pin: 1212,
    movDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
    ],
    currency: "EUR",
    locale: "en_DE",
};
let acc13 = {
    acc: "acc13",
    owner: "Chester Bennington",
    mov: [51, -53, 22, 86, 91,],
    interestRate: 4.5, // 1.2%
    pin: 1313,
    movDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
        "2023-11-18T21:31:17.178Z",
    ],
    currency: "USD",
    locale: "en_USA",
};

// accounts // ✅✅✅✅✅✅
var accounts = [acc01, acc02, acc03, acc04, acc05, acc06, acc07, acc08, acc09, acc10, acc11, acc12, acc13];

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
const movementUI = Array.from(document.querySelector(".movements__value"));




// console.log(movementUI);
// tk symble in html : &#2547 in javascript : \u09F3

var formatMovement = function (date) {

    // calculate days passed since now
    var CalcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
    
    var daysPassed = CalcDaysPassed(new Date(), date);
    console.log(daysPassed);

    if (daysPassed === 0) return "Today";
    if (daysPassed === 1) return "Yesterday";
    if (daysPassed <= 7) return `${daysPassed} days ago`;
    
    // // giving timestamp to movements
    // var day = `${date.getDate()}`.padStart(2,0);
    // var month = `${date.getMonth() + 1}`.padStart(2,0); // Months are 0-based in JS
    // var year = date.getFullYear();
    // var hour = `${date.getHours()}`.padStart(2,0);
    // var min = `${date.getMinutes()}`.padStart(2,0);
    // var displayDate = `Time: ${hour}:${min}, Date: ${day}/${month}/${year}`;
    
    return Intl.DateTimeFormat(current_account.locale).format(date);
}


// Experimenting APT
// getting locale from browser
var lcl = navigator.language;
console.log(lcl);

// how you want to display
var options = {
    hour: "numeric",
    minuite: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
    weekdays: "long",
};

var nowDate = new Date();
// labelDate.textContent = new Intl.DateTimeFormat(current_account.locale).format(nowDate);


var formateCurrency = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(value);
};

// Display Every Movement of Wallet  // ✅✅✅✅✅
var displayMove = function (acc, sort=false) {
    containerMovements.innerHTML = "";
    // .textContent = 0

    var move = sort ? acc.mov.slice().sort((a, b) => (a - b)) : acc.mov;
    move.forEach(function (x, i) {
        var type = x > 0 ? "deposit" : "withdrawal";

        var date = new Date(acc.movDates[i]);
        var displayDate = formatMovement(date);

        var formatedMov = new Intl.NumberFormat(acc.locale, {
            style: "currency",
            currency: "BDT",
        }).format(x);

        // var formatedMov = formateCurrency(move, acc.locale, acc.currency);

        var html = `
        <div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <!--<div class="movements__value">${x} \u09F3</div>-->
          <div class="movements__value">${formatedMov} </div>
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



// Making unique username for bankist // ✅✅✅
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

// Display The Balance // ✅✅✅
var calcDisplayBalance = function (acc) {
    var balance = acc.mov.reduce((accu, cur) => (accu + cur), 0).toFixed(2);
    acc.balance = balance;
    // labelBalance.textContent = `${acc.balance} \u09F3`;
    labelBalance.textContent = `${new Intl.NumberFormat(acc.locale).format(acc.balance)}`;
};

// Display The Summary // ✅✅✅
var calcDisplaySummary = function (acc) {
    // Incoming Summary
    var incomes =(acc.mov)
        .filter(mov => mov > 0)
        .reduce((accu, mov) => (accu + mov), 0)
        .toFixed(2);
    // labelSumIn.textContent = `${incomes} \u09F3`;
    labelSumIn.textContent = formateCurrency(incomes, acc.locale, acc.currency);


    // Outgoing Summary
    var out = (acc.mov)
        .filter(mov => mov < 0)
        .reduce((accu, mov) => (accu + mov), 0);
    out = Math.abs(out).toFixed(2);
    // labelSumOut.textContent = `${out} \u09F3`;
    labelSumOut.textContent = formateCurrency(out, acc.locale, acc.currency);

    // Interest Summary
    var interest = (acc.mov)
        .filter(mov => mov > 0)
        .map(depo => depo * acc.interestRate / 100)
        .filter((int, i, arr) => int >= 1) // this outs the value behind 1
        .reduce((accu, intrst) => (accu + intrst), 0)
        .toFixed(2);
    // labelSumInterest.textContent = `${interest} \u09F3`;
    labelSumInterest.textContent = formateCurrency(interest, acc.locale, acc.currency);
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
    document.querySelector(".account_holder_name").style.fontsize=40;
    displayMove(acc);
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




var current_account, timer;
// Displaying things after Login // ✅✅✅✅
// verify the log in credential
// Event handler : button



/* 
// fake always loged in:::
current_account = acc11;
document.querySelector('.app').classList.remove('hidden');
containerApp.style.opacity = 100;
displayAccount(current_account);
// fake always loged in:::
 */

var LogOutTimer = function () {

    var ticktick = function () {

        var min = String(Math.trunc(remain / 60)).padStart(2, 0);
        var sec = String(Math.trunc(remain % 60)).padStart(2, 0);
        // in each call, print the remaining time to ui
        // labelTimer.textContent = remain;
        labelTimer.textContent = `${min}:${sec}`;

        // decrease time
        remain--;

        // when remaining 0 sec, stop timer and log out...
        if (remain === 0) {
            clearInterval(timer);

            // display UI and welcome msg...
            labelWelcome.textContent = `You need to log in again`;
            containerApp.style.opacity = 0;
        }

    };
    
    // set timer for 5 minutes
    let remain = 120;
    // call the timer every second
    var timer = setInterval(ticktick, 1000);
    return timer;
};



btnLogin.addEventListener("click", function (ev) {
    // prevent form from submitting
    ev.preventDefault();
    current_account = accounts.find(acc => acc.username === inputLoginUsername.value);
    if (current_account?.pin === Number(inputLoginPin.value)) {
        // previously created this funtion for displaying all things
        displayAccount(current_account);
        console.log(current_account.mov);

        // Show all the sections that should be visible when logged in
        document.querySelector('.app').classList.remove('hidden');
        // Add any other selectors for elements that should be visible when logged in


        // Current date //
        // this part of code output the current timestamp in the up //
        var now = new Date();
        var day = `${now.getDate()}`.padStart(2,0);
        var month = `${now.getMonth()+1}`.padStart(2,0);
        var year = now.getFullYear();
        var hour = `${now.getHours()}`.padStart(2,0);
        var min = `${now.getMinutes()}`.padStart(2,0);
        // labelDate.textContent = `Time: ${hour}:${min}, Date: ${day}/${month}/${year}`;
        labelDate.textContent = new Intl.DateTimeFormat(current_account.locale, {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            day: "numeric",
            month: "long",
            year: "numeric",
            weekdays: "long",
        }).format(now);

        // clearing fields
        inputLoginPin.value = "";
        inputLoginPin.blur();

        if (timer) clearInterval(timer);
        timer = LogOutTimer();


    } else {
        // Hide all the sections that should be hidden when not logged in
        document.querySelector('.app').classList.add('hidden');
        // Add any other selectors for elements that should be hidden when not logged in

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

        // add transfer date
        current_account.movDates.push(new Date().toISOString());
        receiverAcc.movDates.push(new Date().toISOString());

        displayAccount(current_account);
        
        
        // updateUI(current_account);
        inputTransferAmount.value = inputTransferTo.value = "";
        inputTransferAmount.blur();
        inputTransferTo.blur(); 

        // reset timer
        if (timer) clearInterval(timer);
        timer = LogOutTimer();
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

    // var amount = Number(inputLoanAmount.value);
    var amount = Math.floor(inputLoanAmount.value);
    // only when 10% of single deposit 
    if (amount > 0 && current_account.mov.some(mo => mo >= amount * 0.1)) {

        current_account.mov.push(amount);
        // add loan date 
        current_account.movDates.push(new Date().toISOString());
        displayAccount(current_account);
        // updateUI(current_account);
        inputTransferAmount.value = inputTransferTo.value = "";
        inputTransferAmount.blur();
        inputTransferTo.blur();
        
        // reset timer
        if (timer) clearInterval(timer);
        timer = LogOutTimer();
        // add movements
        
    }
});


labelBalance.addEventListener("click", function () {
    [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
        if (i % 2 === 0) row.style.backgroundColor = "lightgreen";
        if (i % 2 !== 0) row.style.backgroundColor = "orange";
    });
});


// ✅✅✅ Project End ✅✅✅ //
// ✅✅✅ Project End ✅✅✅ //
// ✅✅✅ Project End ✅✅✅ //



// 🆘🆘🆘 Lectures

console.log(23===23);
console.log(23===23.00);
console.log(23===23.45);

// float
console.log(0.1+0.2);
console.log(0.1+0.3);


// Convert String to Number
// with Number()
console.log(Number("54"));
// with + sign
console.log(+("54"));


// Parsing
console.log(Number.parseInt("230 inch"));
console.log(Number.parseInt("92 kg", 10));

console.log(Number.parseInt("92 kg", 2));

console.log(Number.parseFloat("1234.34 kg"));
console.log(Number.parseFloat("4.34 kg"));

console.log(Number.isNaN(+"20a"));
console.log(Number.isNaN(20/4));
console.log(Number.isNaN(20 / 0));

console.log(Number.isFinite(20));
console.log(Number.isFinite(2/0));

// Math and Rounding
console.log(Math.sqrt(25));
console.log(Math.pow(2, 3)); // 2^3
console.log(2 ** 3); // 2^3
console.log(Math.max(2,435,4,423,43,324,32,543,5,345,34,534,5));
console.log(Math.min(2, 435, 4, 423, 43, 324, 32, 543, 5, 345, 34, 534, 5));

// random
console.log(Math.trunc(Math.random() * 6 + 1));


var random_Number = (min, max) => Math.trunc(Math.random() * (max-min) + 1)+min;
console.log(random_Number(10, 20));

// Rounding integers
console.log (Math.round (23.3));
console.log (Math.round (23.9));
console.log(Math.ceil(24.3));
console.log (Math.ceil(23.9));
console. log (Math.floor(23.3)) ;
console. log (Math.floor('23.9'));
console. log (Math.trunc(23.3));
console. log (Math.trunc(-23.3));
console. log (Math.floor(-23.3));



// Remainder operator

console.log(134/3);
console.log(134%3);


//
var isEven = n => n % 2 === 0;
console.log(isEven(6));


// Numeric separator
var diameter = 287_460_000_00;
// 287,560,000,000
console.log(diameter);

var pricePoisa = 254_44;
console.log(pricePoisa);

var tranferFee = 234_00;
console.log(tranferFee);


// bigInt
console.log(2**53-1);
console.log(2**53+1);
console.log(2**53+7);
console.log(90071992547410009007199254741000n);
console.log(BigInt(90071992547410009007199254741000));
console.log(10000n + 10000n);
console.log(90071992547410009007199254741000n * 90071992547410009007199254741000n);

var huge = 90071992547410009007199254741000n;
var num = 34;
console.log(huge * BigInt(num));
console.log(BigInt(num));
console.log(typeof huge);
console.log(20n === 20);
console.log(20n=="20");
console.log(11n/3n);
console.log(11/3);


// Dates and times
var now = new Date();
console.log(now);
console.log(new Date("aug 02, 2019"));
console.log(new Date("dec 31, 2023"));

console.log(new Date(2032, 9, 18, 13,43,23));

// working with dates
var future = new Date(2025, 9, 7, 15, 22, 34);

console.log(future);
console.log(future.getFullYear());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getMonth());
console.log(future.getTime());
console.log(future.toISOString());
console.log(future.setDate(20));
console.log(future);



/* 

@12_Numbers_and_Dates in this code, it outputs in the browser: when not loged in into any account, it shows "Log in to get Started" and "user" , "pin" input textarea and also the table of movements of balance in the middle of the screen, and transfer block, loan block and also the close account block.
i want to show only "Log in to get started" and user and pin textarea, log in button when its not logged into any account. if logged in, then it will show all things. what should be the change in code.

 */


// date formating
console.log(+future);
var daysPassed = (date1, date2) => Math.abs(date2 - date1)/(1000*60*60*24);

var pass = daysPassed(new Date(2034, 3, 14), new Date(2036, 4, 24));
console.log(pass);



// number formating
var num = 456547657.34;
console.log("US: ", new Intl.NumberFormat("en-US").format(num));
console.log("BD: ", new Intl.NumberFormat("bn-BD").format(num));

var options = {
    style: "unit",
    unit: "mile-per-hour",
};

console.log("BD: ", new Intl.NumberFormat("bn-BD", options).format(num));


// time limit setTimeout
ingreds = ["Sugar", "Chocolates", "Mosla"];
// setTimeout((img1, img2, img3) => console.log(`Here is your Cha...${img1} and ${img2} and ${img3}`), 3000, ...ingreds);
console.log("waiting");

// var ChaTimeOut = setTimeout((img1, img2, img3) => console.log(`Here is your Cha...${img1} and ${img2} and ${img3}`), 3000, ...ingreds);

// if (ingreds.includes("Sugar")) clearTimeout(ChaTimeOut);   



// // setInterval
// setInterval(function () {
//     var now = new Date();
//     console.log(now);
    
// }, 3000);
