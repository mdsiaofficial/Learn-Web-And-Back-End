'use strict';

// Selecting Elements
const player_0_El = document.querySelector('.player--0');
const player_1_El = document.querySelector('.player--1');
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


// this function switch player -- uses multiple times 
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    CurrentScore = 0;
    activePlayer = (activePlayer==0 ? 1:0);
    player_0_El.classList.toggle('player--active');
    player_1_El.classList.toggle('player--active');
};


// Rolling the dice:
btnRoll.addEventListener('click', function(){
    // 1. Generating a random dice roll here...
    const dice = Math.trunc(Math.random()*6)+1;
    // console.log(dice);
    

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
        switchPlayer();
    }
});

btnHold.addEventListener('click', function(){
    // console.log("Hold");
    
    // 1. add current score = active players score
    scores[activePlayer] += CurrentScore;
    // console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. check score>=100 ? win-finish game
    if(scores[activePlayer]>=20){
        // End the game here...
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        
        // My styles of winning.

        //diceEl.src = `winner.png`;
        //activePlayer===0? diceEl.src = `p1win.png`:diceEl.src = `p2win.png`;
        activePlayer===0? diceEl.src = `winner1.png`:diceEl.src = `winner2.png`;
        
    }else{
        // switch player:
        switchPlayer();
    }

});
