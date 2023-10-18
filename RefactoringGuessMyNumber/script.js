'use strict';

let SecretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highsScore = 0;

const displayMessage = function(msg){
    document.querySelector('.message').textContent=msg;
}

document.querySelector('.btncheck').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if(!guess){ // when guess is no input

        displayMessage('No Number! ⛔');

    }else if(guess === SecretNumber){ // when guess is right 

        displayMessage('Correct Number! ✔');
        document.querySelector('.number').textContent = SecretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score>highsScore){
            highsScore = score;
            document.querySelector('.highscore').textContent = highsScore;
        }

    }else if(guess!==SecretNumber){ // when gues is wrong

        if(score>1) {
            displayMessage(guess > SecretNumber ? 'Too High ⏫' : 'Too Low ⏬');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('❌ You lost the Game!');
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.score').textContent = 0;
        }
    }

});

document.querySelector('.btnagain').addEventListener('click', function(){
    score = 20;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('.number').style.width = '15rem';
});