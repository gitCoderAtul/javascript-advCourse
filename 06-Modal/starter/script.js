'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');    
};

for(let i=0; i < btnOpenModal.length; i++)
// console.log(btnOpenModal[i].textContent);
// btnOpenModal[i].addEventListener('click', function(){
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// });

btnOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    console.log(e.key);
    // if(e.key === 'Escape'){
    //     console.log('You enter Esc');
    //     if(!modal.classList.contains('hidden')){
    //         closeModal();
    //     }
    // }

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){        
            closeModal();        
    }
})