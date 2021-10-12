let heads = 0 //this variable is a counter for the amount of times you roll heads
let tails = 0//counter for amount of times you roll tails
let correctGuesses = 0 //your correct guesses
let playerGuess = false
let headGuess = document.querySelector('#guessOne') 
let tailsGuess = document.querySelector('#guessTwo')
let coin = document.querySelector('.coin') //is the image being selected in the DOM for manipulation
let flipBtn = document.querySelector('#flipButton') //button which initiates css/js and the whole function
let resetBtn = document.querySelector('#resetButton')//reset button just starts this shit over. 



console.log(coin, flipBtn, resetBtn)

flipBtn.addEventListener('click', randomFlip)//event listener for the flip button 

//function that makes the coin flip randomly. 
function randomFlip(){
    console.log(`randomflip`)
    // let i = Math.floor(Math.random() * 2)
    coin.style.animation = 'none'
    fetch(`/api?guess=${playerGuess}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.coinToss){
                setTimeout(function(){
                    coin.style.animation = 'spin-heads 3s forwards'
                }, 100)
                heads++
                checkForWin(data.coinToss)
                console.log('heads is now: ' + heads)
                
            }else{
                setTimeout(function(){
                    coin.style.animation = 'spin-tails 3s forwards'
                }, 100)
                tails++
                checkForWin(data.coinToss)
                console.log('tails is now: ' +tails)
            }
            setTimeout(updateStats, 3000)
            disableButton()
        })
    

}

function updateStats(){
    document.querySelector('#headsCount').textContent = `Heads: ${heads}`
    document.querySelector('#tailsCount').textContent = `Tails: ${tails}`
}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false
    }, 3000)
}

resetBtn.addEventListener('click', () => {
    coin.style.animation = 'none'
    heads, tails = 0
    // tails = 0
    updateStats()
})

//mycode

function checkForWin(coinToss){ 
    console.log('this is the players guess', playerGuess, 'this is the players coin toss', coinToss)
    if(playerGuess === coinToss){ 
        console.log('omg you got it right!!!)')
        correctGuesses++
        console.log("this is a correct guess" + correctGuesses) //checking to see if the correct guess are showing in the dom. 
        document.querySelector('#yourGuesses').innerText = 'number of correct guesses: ' + correctGuesses
    }else{
        document.querySelector('#yourGuesses').innerText = 'number of correct guesses: ' + correctGuesses
    }
}

// function checkForHeads(y){
//     if(playerGuess === true && y === 1){
        
//     }else{
//         console.log('whomp whompwhonpm')
//     }
// }

// function checkForTails(x){
//     if(playerGuess === false && x === 0){
//         console.log('omg you got it right!!!)')
//         correctGuesses++
//         console.log(correctGuesses)
//     }else{
//         console.log('whomp whompwhonpm')
//     }
// }

function playerGuessesHeads(){
    
    playerGuess = true//change to guess
    console.log(playerGuess)
}
function playerGuessesTails(){
    // console.log(event.target)
    playerGuess  = false
    console.log(playerGuess)
}
headGuess.addEventListener('click', playerGuessesHeads)
tailsGuess.addEventListener('click', playerGuessesTails)