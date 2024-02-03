'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector(".nav");

const openModal = function (e) {
	// e.preventDefault();
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

// lorem
// code added from another place
// pull korlam. abr new kore code leklam

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


// button to directory

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

///////////////////////
// button scrolling
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


//////////////////////
// page navigatioin //
/* 
document.querySelectorAll(".nav__link").forEach(function (el) {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		console.log("Link Link");
		const id = this.getAttribute("href");
		console.log(id);
		
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
	});
});
//

*/

// 1. Add event listener to common parent element 
// 2. Determine what elemetn the event 
document.querySelector(".nav__links").addEventListener("click", function (e) {
	
	e.preventDefault();
	// console.log(e.target);
	// matching srategy 
	if (e.target.classList.contains("nav__link")) {
		
		console.log("Link Link");
		const id = e.target.getAttribute("href");
		console.log(id);
		
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
		
	}
});


// Tabbed component
const tabs = document.querySelectorAll(".operations__tab"); // Changed to select all elements with class operations__tab
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content"); // Changed to select all elements with class operations__content

tabsContainer.addEventListener("click", function (e) {
	const clicked = e.target.closest('.operations__tab'); // Changed to use closest to find the closest parent with class operations__tab
	console.log(clicked);
	
	// guard clause
	if (!clicked) return;

	// Remove active classes
	tabs.forEach(tab => tab.classList.remove("operations__tab--active"));
	tabsContent.forEach(content => content.classList.remove("operations__content--active"));

	// Activate tab
	clicked.classList.add("operations__tab--active");

	// Activate content area
	document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");
});

// Menu fade animation
nav.addEventListener("mouseover", function (el) {
	if (el.target.classList.contains("nav__link")) {
		const link = el.target;
		const siblings = link.closest(".nav").querySelectorAll(".nav__link");
		const logo = link.closest(".nav").querySelector("img");
		siblings.forEach(nl => {
			if (nl !== link) nl.style.opacity = 0.5;
		});
		logo.style.opacity = 1;
	}
})

nav.addEventListener("mouseout", function (el) {
})
	
	

// Slider:
const slides = document.querySelectorAll(".slide");

slides.forEach((s, i) => s.style.transform = `transletX(${100 % i})`);
// 0%, 100%, 200%, 300%






const alertH1 = function (e) {
	alert("addEventListner: Great! You are reading the heading 😁");

};

const h1 = document.querySelector("h1");

h1.addEventListener("mouseenter", alertH1);
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
// setting time for removing eventlistener

// h1.onmouseenter = alertH1;



// RGB (255,255,255)
// random coloring the nav bar

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomNum(0,255)},${randomNum(0,255)},${randomNum(0,255)})`;

console.log(randomColor());

document.querySelector(".nav__link").addEventListener("click", function (e) {
	// console.log("links");
	this.style.backgroundColor = randomColor();
	console.log("link", e.target, e.currentTarget);
	
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
	// console.log("links");
	this.style.backgroundColor = randomColor();
	console.log("navlinks", e.target, e.currentTarget);
	
	// stop propagation
	e.stopPropagation();
});
document.querySelector(".nav").addEventListener("click", function (e) {
	// console.log("links");
	this.style.backgroundColor = randomColor();
	console.log("Nav", e.target, e.currentTarget);
	
}, true);

// going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = "#be6c00";
h1.lastElementChild.style.color = "red";

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest(".header").style.background = "var(--gradient-secondary)";
// h1.closest("h1").style.background = "var(--gradient-primary)";

// Going sideways : siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (e) {
	if (e !== h1) e.style.transform = "scale(0.5)";
});

/*

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
	//message.parentElement.removeChild(message); // old way
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

//
// // not working 
//
// const fs = require("fs");
// fs.readFile("./temp.txt", "utf8", (err, data) => {
// 	if (err) throw err;

// 	console.log(data);
	
// });
//


let taskList = fetch("temp.txt")
	.then((data) => data.text())
	.then((text) => {
		console.log(text);
		
	})
	.catch((e) => console.log(e));



// let rand = Math.floor(Math.random()*10); // random number 1-9
let rand = Math.floor(Math.random()*10)+1; // random number 1-10
// let rand = (Math.random()*10); // random number 1-9 with floating point number
// let rand = (Math.random()*10)+1; // Random number 1-10 with floating point number
console.log(rand);






// let a = 10, b = 10, c = 10;
// if (a == b == c) console.log("hello");
// else console.log("bye bye");




*/