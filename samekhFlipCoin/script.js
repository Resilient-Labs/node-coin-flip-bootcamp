let heads = 0 //this variable is a counter for the amount of times you roll heads
let tails = 0//counter for amount of times you roll tails
let correctGuesses = 0 //your correct guesses
let playerGuessHeads = false
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
    fetch(`/api?search=${i}`)
        .then(res => res.json())
        .then(data => {
            if(data.i){
                setTimeout(function(){
                    coin.style.animation = 'spin-heads 3s forwards'
                }, 100)
                // heads++
                checkForHeads(data.i)
                console.log('heads is now: ' + heads)
                
            }else if (data.i){
                setTimeout(function(){
                    coin.style.animation = 'spin-tails 3s forwards'
                }, 100)
                // tails++
                checkForTails(data.i)
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

function checkForHeads(y){
    if(playerGuessHeads === true && y === 1){
        console.log('omg you got it right!!!)')
    }else{
        console.log('whomp whompwhonpm')
    }
}

function checkForTails(x){
    if(playerGuessHeads === false && x === 0){
        console.log('omg you got it right!!!)')
    }else{
        console.log('whomp whompwhonpm')
    }
}

function playerGuessesHeads(){
    
    playerGuessHeads = true
    console.log(playerGuessHeads)
}
function playerGuessesTails(){
    
    playerGuessHeads = false
    console.log(playerGuessHeads)
}
headGuess.addEventListener('click', playerGuessesHeads)
tailsGuess.addEventListener('click', playerGuessesTails)