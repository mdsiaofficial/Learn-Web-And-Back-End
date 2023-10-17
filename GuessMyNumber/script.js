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

document.querySelector('.btncheck').addEventListener('click', function () {
    //console.log(document.querySelector('.guess').value);
    //document.querySelector('.message').textContent = 'Correct Number! ✔';
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No Number! ⛔';
    }
});
