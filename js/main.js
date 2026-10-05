
let headsBtn = document.getElementById('guessHeadsBtn');
let tailsBtn = document.getElementById('guessTailsBtn');
headsBtn.addEventListener('click',saveGuess);
tailsBtn.addEventListener('click',saveGuess);
let coinFlip = document.querySelector('.coin span');
let guess;
let result;
let animationEnded = false;
let coin = document.querySelector('.coin');
coin.addEventListener('animationend', ()=>{
coin.classList.remove('flipping');
animationEnded = true;
checkStatus();

}) 
let displayResult = document.querySelector('h2');
function saveGuess(event){
    guess = event.target.innerText.toLowerCase();
displayResult.innerText=''
//console.log(guess)
}
let flipBtn = document.getElementById('flipbtn');
flipBtn.addEventListener('click',()=>{

fetch('/flip') 
.then(res => res.json())
.then(data =>{
     result = data.result; 
     console.log('fetchended')
     checkStatus();
//coinFace(result);
    });
coinFlip.innerText = '---';
coin.classList.add('flipping');

    
});

function checkStatus(){
  if(result !== undefined && animationEnded){
    coinFace(result);
   
}
}
function coinFace( face ){
  
    if (face === guess){
displayResult.innerText = `${face.charAt(0).toUpperCase()}${face.slice(1)}! You guessed right!`
    }else if (face !== guess){
        displayResult.innerText = `${face.charAt(0).toUpperCase()}${face.slice(1)}! Try your luck again!`
    }else {
        displayResult.innerText = 'Error - please try again';
    
    }
    coinFlip.innerText = face.charAt(0).toUpperCase()+face.slice(1);
animationEnded = false;
}
    