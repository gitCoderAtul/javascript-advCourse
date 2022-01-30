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

//page navigation
// document.querySelectorAll('.nav__link').forEach(element => {
//   element.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('link');
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior:'smooth'
//     });
    
//   })
// });

//determine what element originated the event
document.querySelector('.nav__links').addEventListener('click',function(e){
console.log(e.target);
e.preventDefault();

if(e.target.classList.contains('nav__link')){
  console.log('link');
  const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior:'smooth'
    });
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

//old way
window.scrollTo({
  left: s1coords.left + window.pageXOffset,
  top : s1coords.top + window.pageYOffset,
  behavior: 'smooth' 
});

//modern - for latest browser only
section1.scrollIntoView({behavior:'smooth'});
});

//event
const h1 = document.querySelector('h1');    
const alertH1 = function(e){
  alert('Great! You are reading the heading :D');
}

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 300);

// Great! You are reading the heading :D'
// h1.addEventListener('mouseenter', function(e){
//   alert('Great! You are reading the heading :D');
// })

//event propagation practice
const randomInt = (min, max) => 
Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => 
`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
//console.log(randomInt(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  //console.log('LINK', e.target, e.currentTarget);
  //console.log(e.currentTarget === this);

  // Stop propagation
 // e.stopPropagation();
});

// document.querySelector('.nav__links').addEventListener('click', function(e){
//    this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function(e){
//    this.style.backgroundColor = randomColor();
// });

//Dom Transverse
//  //Going upwards: parents
//  .childNodes  .children 
//  .firstElementcChild  .lastElementChild
//  //going upwards: parents
//  .parentNode  .parentElement
//  .closest  
//  //Going sidewats: siblings
//.previousElementSibling   .nextElementsSibling
//  .previousSibling  .nextSibling

const he = document.querySelector('h1');
console.log(he.childNodes);
console.log(he.children);

console.log(he.parentNode);
console.log(he.parentElement);

he.closest('header').style.background = 'var(--gradient-secondary)';
he.closest('h1').style.background = 'var(--gradient-primary)';

console.log(he.previousElementSibling);
console.log(he.nextElementSibling);

console.log(he.previousSibling);
console.log(he.nextSibling);

console.log(he.parentElement.children);
[...he.parentElement.children].forEach(function(el){
  if(el !== he)
    el.style.transform ='scale(0.5)';
  
});


//tab component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer =document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e){
  const clicks = e.target.closest('.operations__tab');
  console.log(clicks);

  //old way guard close
  // if(clicks){
  //   //will not get error if we write this type of code
  //   clicks.classList.add('operations__tab--active');
  // } 
  //modern way - guard close

  if(!clicks) return;
  
  //Remove active tab
  tabs.forEach((t) => {t.classList.remove('operations__tab--active')
});
tabsContent.forEach((c) => {c.classList.remove('operations__content--active')});

  //Active tab
  clicks.classList.add('operations__tab--active');

  //Active content tab
  console.log(clicks.dataset.tab);
  document.querySelector(`.operations__content--${clicks.dataset.tab}`)
  .classList.add('operations__content--active')
})


