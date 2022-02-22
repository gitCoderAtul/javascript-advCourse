'use strict';

// const message = document.querySelector('.message');
//let secretNumber = document.querySelector('.number');
let btncheck = document.querySelector('.check');
let guess =  document.querySelector('.guess').value;
let score = 20;
let highscore = 0;

let secretNumber = Math.floor(Math.random() * 20 + 1);

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

btncheck.addEventListener('click', function(){
    const guess =  Number(document.querySelector('.guess').value);
    
    console.log(guess, typeof guess);
    console.log(secretNumber, typeof secretNumber);

   
    if( !guess ){
        displayMessage('no number');    
     }else if(secretNumber == guess) {        
        displayMessage('correct number');
        document.querySelector('body').style.backgroundColor = '#60b347'; 
document.querySelector('.number').textContent  = secretNumber;
    }  else if(secretNumber > guess){
        if(score > 1 ){
            displayMessage('number is low ');
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            displayMessage('You lost Game '); 
        document.querySelector('.score').textContent = 0;
        }
        
    } else if(secretNumber < guess){
        if(score > 1 ){
            displayMessage('number is high ');
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            displayMessage('You lost Game '); 
        document.querySelector('.score').textContent = 0;
        } 
    }
    else{
        displayMessage('wrong number');  
    }
});

document.querySelector('.again').addEventListener('click', function(){
    let secretNumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.number').textContent  = "?";
    displayMessage('Start Guessing ....');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';

});
 