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
document.querySelector('.number').textContent = SecretNumber;

document.querySelector('.btncheck').addEventListener('click', function () {
    //console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if(!guess){
        document.querySelector('.message').textContent = 'No Number! ⛔';
    }else if(guess === SecretNumber){
        document.querySelector('.message').textContent = 'Correct Number! ✔';
    }else if(guess> SecretNumber){
        document.querySelector('.message').textContent = 'Too High ⏫';
    }else if(guess<SecretNumber){
        document.querySelector('.message').textContent = 'Too Low ⏬';
    }
});
