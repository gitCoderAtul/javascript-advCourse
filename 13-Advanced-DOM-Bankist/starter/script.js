'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// selecting

//console.log(document.documentElement); //return root node of document
//console.log(document.head); // return head element
//console.log(document.body); // specifity start to end of body

const header = document.querySelector(".header"); // return first element
const allSections = document.querySelectorAll(".section"); //return all elemnet
  
console.log(header);
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");

console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

//create
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 
'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);

// header.before(message);
// header.after(message);

document.querySelector('.btn--close-cookie')
.addEventListener('click', function(){
 // message.remove(message);
  message.parentElement.removeChild(message)
})

// style, attribute and classes
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//console.log(message.style.color);
//console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color); // to find value from existing property
console.log(getComputedStyle(message).height); // to find value from existing property

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// Attribute
//const logo = document.querySelector('.nav__logo');
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt ='Beautiful minimalist logo';

//non standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Banklist')

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data Attribute
console.log(logo.dataset.versionNumber);

//class
logo.classList.add('new1', 'new2');
logo.classList.remove('new1');
logo.classList.toggle('new1');

//do not use
logo.clasName = 'jonas';

//smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
const s1coords =   section1.getBoundingClientRect();

console.log(s1coords);
console.log(e.target.getBoundingClientRect());
// console.log('check')

console.log('current scroll x/y ' + window.pageXOffset, pageYOffset);

//scrolling
// window.scrollTo(
// s1coords.left + window.pageXOffset,
// s1coords.top + window.pageYOffset
// );

window.scrollTo({
  left: s1coords.left + window.pageXOffset,
  top : s1coords.top + window.pageYOffset,
  behavior: 'smooth' 
});

section1.scrollIntoView({behavior:'smooth'});


});