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


// making scrolling smooth
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
	const s1Cords = section1.getBoundingClientRect();
	console.log(s1Cords);
	console.log(e.target.getBoundingClientRect());
	
	console.log("Current scroll X/Y", window.pageXOffset, window.pageYOffset);
	
	console.log("height/width viewport", document.documentElement.clientHeight, document.documentElement.clientWidth);
	
	// scrolling
	// window.scrollTo(s1Cords.left + window.pageXOffset, s1Cords.top + window.pageYOffset); // this is old way
	// window.scrollTo(s1Cords.left + window.scrollX, s1Cords.top + window.scrollY); // new way
	section1.scrollIntoView({ behavior: "smooth" }); // another modern way

});


const alertH1 = function (e) {
	alert("addEventListner: Great! You are reading the heading 😁");

};

const h1 = document.querySelector("h1");

h1.addEventListener("mouseenter", alertH1);
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
// setting time for removing eventlistener

// h1.onmouseenter = alertH1;












////////////////////////
//// Learning 🆘🆘🆘🆘//////////
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
// message.textContent = "We use cookied for improved function.";
message.innerHTML = 'We use cookies for improved funcion.<button class="btn btn--close-cookie">Got it!</button>';
// message.innerHTML = 'We use cookies for improved funcion.';

header.prepend(message);
// header.append(message); 
// header.append(message.cloneNode(true)); 


// header.before(message);
// header.after(message);


// Deleting element:

document.querySelector(".btn--close-cookie").addEventListener("click", function () {
	message.remove(); // new way
	message.parentElement.removeChild(message); // old way
})



// Style

message.style.backgroundColor = "#27163d";
message.style.width = "30%";

console.log(message.style.backgroundColor);

console.log(getComputedStyle(message));

message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 40 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);


// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));

logo.setAttribute("Company", "Bankist");

// logo.setAttribute("src", "13_Advanced_DOM_and_Events\img\hero.png");


const link = document.querySelector(".twitter-link");
console.log(link.href);
console.log(link.getAttribute("href"));


const link2 = document.querySelector(".nav__link--btn");
console.log(link2.href);
console.log(link2.getAttribute("href"));

// Data Attribute
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
// logo.classList.toggle("c");
logo.classList.contains("c");



