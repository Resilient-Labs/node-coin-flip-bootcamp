//Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game

//You have a coin
//Choose heads or tails
//Player clicks button to flip
//Computer chooses heads or tells
//Check if to see who won the flip
//Add to your score
//Reset game to play again.


let heads = document.querySelector('#heads')
let tails = document.querySelector('#tails')
let message = document.querySelector('#gameMessage')
let userChoice = document.querySelector('#coins')
let button = document.querySelector('input')
let tossMessage = document.querySelector('#tossMessage')
let winMessage = document.querySelector('#winMessage')


function makeCoinFlipReq(e){
    e.preventDefault()
    if (userChoice.value == 'heads' || userChoice.value == 'tails'){
        fetch(`/api`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            console.log(`API response is ${data['Computer choice']}`)
            showHeadTailImages(data['Computer choice'])
        });
    }else{
        tossMessage.innerText = 'Please select heads or tails.'
    }
}

function showHeadTailImages(coinResponse){

    if(coinResponse == 'heads'){
        //console.log('Its heads')
        tossMessage.innerText = 'Its heads'
        heads.classList.remove('hidden')
        tails.classList.add('hidden')

    }else{
        //console.log('Its tails')
        tossMessage.innerText = 'Its tails'
        tails.classList.remove('hidden')
        heads.classList.add('hidden')
    }
    checkIfPlayerWon(coinResponse)
}

function checkIfPlayerWon(coinResponse){
    console.log(`The users choice is ${userChoice.value}`)

    if (userChoice.value == coinResponse){
        //console.log('You win')
        winMessage.innerText = 'You win'
    }else{
        //console.log('You Lose')
        winMessage.innerText = 'You Lose'
    }
}

button.addEventListener('click', makeCoinFlipReq)