'use strict';

// variables here:
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// to show my all buttons:
console.log(btnShowModal);


/*
// ## Code Template 1 ## 
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


/*
// ## Code Template 2 ## 
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
btnCloseModal.addEventListener('click', ()=>closeModal()); // Changes here
overlay.addEventListener('click', ()=>closeModal());
*/


// ## Code Template 3 ## 
const closeModal = function(){
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};
const showModal = function(){
    //console.log('Button Clicked');
    // this button for clicking the modal button
    modal.classList.remove('hidden');
    // this will remove the 'hidden' string from 'modal hidden'
    overlay.classList.remove('hidden'); // just for some styles background blur
    //modal.style.display = 'block';
};
for(let i=0; i<btnShowModal.length; i++){
    btnShowModal[i].addEventListener('click', showModal);
}
btnCloseModal.addEventListener('click', closeModal); // Changes here
overlay.addEventListener('click', closeModal); 

// using the Escape button to close modal:
document.addEventListener('keydown', function(e){
    // console.log(e.key); 
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});
