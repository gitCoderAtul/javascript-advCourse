'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


//starting condition
let currentScore,activePlayer,playing,score;

const init = function(){
    score = [0,0];
currentScore = 0;
    activePlayer = 0;
    playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0; 

diceEl.classList.add('hidden');  
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
} 
init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
        if(activePlayer == 0){
            activePlayer = 1;
            currentScore = 0;
            
        }else{
            activePlayer = 0;          
        }
}

btnRoll.addEventListener('click', function(){
    // Dice number
    if(playing){
        
    const dice = Math.trunc(Math.random() * 6 + 1);

    console.log( dice + ' Roll button');
    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check the rolled 1
    if(dice !== 1){
        //Add dice to current score
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        //current0El.textContent = currentScore;
    }else{
        //switch next player
      // activePlayer = activePlayer == 0 ? 1 : 0;

      switchPlayer();
      // switch player code call to function
    //   document.getElementById(`current--${activePlayer}`).textContent = 0;
    //   player0El.classList.toggle('player--active');
    //   player1El.classList.toggle('player--active');
    //     if(activePlayer == 0){
    //         activePlayer = 1;
    //         currentScore = 0;
            
    //     }else{
    //         activePlayer = 0;          
    //     }        
    }
    
}
});
btnNew.addEventListener('click', function(){
    console.log('New button');
    init();
     
});
btnHold.addEventListener('click', function(){
    if(playing){
    //Add current score to active player
    score[activePlayer] += currentScore;
    console.log(score[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    //finish game
        if(score[activePlayer] >= 100){ 
            playing = false;
            diceEl.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            
        }else{
            //switch player
            switchPlayer();
        } 
}
});
