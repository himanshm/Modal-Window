'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let btn = 0; btn < btnsOpenModal.length; btn++) {
  btnsOpenModal[btn].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Adding keypress event - Closing the modal on pressing esc key
// For global events - like the keyboard events - we usually listen to the whole document

// keyup - triggered when we lift our finger off the key
// keypress - keypress is fired continuously as we keep our fingers on a certain key
// keydown - keydown is fired as soon as we just press down the key

// we do not call this function, we simply tell js to call this function when the keydown event occurs

document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
