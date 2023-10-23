'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Start Values:
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


// Rolling the dice:
btnRoll.addEventListener('click', function(){
    // 1. Generating a random dice roll here...
    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);
    

    // 2. Now Remove hidden and Display dice:
    diceEl.classList.remove('hidden');
    diceEl.src = `${dice}.png`;


    // 3. check dice roll:
    if(dice!==1){
        // add value to current score:
        

    }else{
        // switch player:

    }
})