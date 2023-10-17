'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! ✔';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 20;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

const SecretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;

// document.querySelector('.number').textContent = SecretNumber;

document.querySelector('.btncheck').addEventListener('click', function () {
    //console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if(!guess){ // when guess is no input

        document.querySelector('.message').textContent = 'No Number! ⛔';

    }else if(guess === SecretNumber){ // when guess is right 

        document.querySelector('.message').textContent = 'Correct Number! ✔';
        document.querySelector('.number').textContent = SecretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    }else if(guess> SecretNumber){ // when high

        if(score>1) {
            document.querySelector('.message').textContent = 'Too High ⏫';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '❌ You lost the Game!';
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').style.width = '30rem';

            document.querySelector('.score').textContent = 0;
        }

    }else if(guess<SecretNumber){ // when low

        if (score > 1) {
          document.querySelector('.message').textContent = 'Too Low ⏬';
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          document.querySelector('.message').textContent ='❌ You lost the Game!';
          document.querySelector('body').style.backgroundColor = 'red';
          document.querySelector('.number').style.width = '30rem';
          document.querySelector('.score').textContent = 0;
        }

    }

});
