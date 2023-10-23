'use strict';

// Selecting Elements
const score_0_El = document.querySelector('#score--0');
const score_1_El = document.getElementById('score--1');
const current_0_El = document.getElementById('current--0');
const current_1_El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Start Values:
score_0_El.textContent = 0;
score_1_El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let CurrentScore =0;
let activePlayer =0;

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
        CurrentScore = CurrentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = CurrentScore;
        //current_0_El.textContent = CurrentScore; //change

    }else{
        // switch player:
        activePlayer = (activePlayer===0? 1:0);
    }
})