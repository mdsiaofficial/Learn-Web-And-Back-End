'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
	// e.preventDefault();
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

// Open Modal works for every button that has the class
btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

/* 
for (let i = 0; i < btnsOpenModal.length; i++){
	btnsOpenModal[i].addEventListener('click', openModal);
}
 */

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});




////////////////////////
//// Learning //////////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


const header=document.querySelector(".header");
document.querySelectorAll(".section")

const allSec = document.querySelectorAll(".section");
console.log(allSec);

document.getElementById("section--1");

const allBut = document.getElementsByTagName("button");

console.log(allBut);

document.getElementsByClassName("btn");

// creating and inserting element
// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "We use cookied for improved function.";
message.innerHTML = 'We use cookies for improved funcion.<button class="btn btn--close - cookie">Got it!</button>';
// message.innerHTML = 'We use cookies for improved funcion.';

header.prepend(message);
header.append(message); 