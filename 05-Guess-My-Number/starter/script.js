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

   //not number
    if( !guess ){
        displayMessage('no number');    
   //correct number win
     }else if(secretNumber == guess) {        
        displayMessage('correct number');
        document.querySelector('body').style.backgroundColor = '#60b347'; 
        document.querySelector('.number').textContent  = secretNumber;
         if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore; 
        }
    } 
    else if(secretNumber !== guess){
        if(score > 1 ){
            // displayMessage('number is low ');
            displayMessage(secretNumber > guess ? 'Number is Too Low!' : 'Number is Too High');
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            displayMessage('You lost Game '); 
        document.querySelector('.score').textContent = 0;
        } 
    }
    //low number
    // else if(secretNumber > guess){
    //     if(score > 1 ){
    //         displayMessage('number is low ');
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }else{
    //         displayMessage('You lost Game '); 
    //     document.querySelector('.score').textContent = 0;
    //     } 
    // //high number
    // } else if(secretNumber < guess){
    //     if(score > 1 ){
    //         displayMessage('number is high ');
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }else{
    //         displayMessage('You lost Game '); 
    //     document.querySelector('.score').textContent = 0;
    //     } 
    // }
    else{
        displayMessage('wrong number');  
    }
});

document.querySelector('.again').addEventListener('click', function(){
    let score = 20;
    let secretNumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.number').textContent  = "?";
    displayMessage('Start Guessing ....');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

});
 