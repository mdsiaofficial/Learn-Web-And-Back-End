'use strict';

// variables here:
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// to show my all buttons:
console.log(btnShowModal);


/*
// ## Code Templace 1 ## 
for(let i=0; i<btnShowModal.length; i++){

    btnShowModal[i].addEventListener('click', function () {
      console.log('Button Clicked');
      // this button for clicking the modal button
      modal.classList.remove('hidden');
      // this will remove the 'hidden' string from 'modal hidden'
      overlay.classList.remove('hidden'); // just for some styles background blur
      //modal.style.display = 'block';
    });   
}
btnCloseModal.addEventListener('click', function(){
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
});
*/


// ## Code Templace 2 ## 
const closeModal = function(){
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};
const showModal = function(){
    console.log('Button Clicked');
    // this button for clicking the modal button
    modal.classList.remove('hidden');
    // this will remove the 'hidden' string from 'modal hidden'
    overlay.classList.remove('hidden'); // just for some styles background blur
    //modal.style.display = 'block';
};

for(let i=0; i<btnShowModal.length; i++){
    btnShowModal[i].addEventListener('click', ()=>showModal());
}
btnCloseModal.addEventListener('click', ()=>closeModal());
overlay.addEventListener('click', ()=>closeModal());

