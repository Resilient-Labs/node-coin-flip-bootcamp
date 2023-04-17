//create a simple  coin flip guessing game 

//score for how many times it lands on heads or tails
// let score1 = 0
// let score2 = 0
//create the variables for the coin flip
// const playerScore = document.querySelector('.playerScore') //score for the player
// const compScore = document.querySelector('.compScore') //score for the computer
// const choiceInput = document.querySelector('input') //where the player will type heads or tails
// const dogeBtn = document.querySelector('.dogeBtn') //starts the coin flip
// const rstBtn = document.querySelector('.btnReset')//reset the game**will reset input as well
//const clrBtn =document.querySelector('.btnClear') //reset the scores


document.querySelector('.dogeBtn').addEventListener('click', coinFlip)


function coinFlip(){
    const userInput = document.querySelector('input').value
    fetch(`/flipcoin?choice=${userInput}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        document.querySelector('.playerScore').textContent = data.score.playerScore
        document.querySelector('.compScore').textContent = data.score.compScore
        document.querySelector('.headsOrTails').textContent = data.result
    })
}
// const rstBtn = document.querySelector('.btnReset')
// rstBtn.addEventListener("click", resetGame)


// //a function or constructor that will take the input and then log that info as the choice that the player made
// function logChoice() {
//     // Get the user's choice from the input field
//     let playerChoice = choiceInput.value
//     // Log the user's choice to the console
//     console.log("Player choice: " + playerChoice)
//     }
    
// //a function that will flip the coin and determine the outcome
// function flipCoin() {
//     // Generate a random number (either 0 or 1)
//     let coin = Math.floor(Math.random() * 2)
//     // If the number is 0, the coin landed on heads
//     if (coin === 0){
//     console.log("Heads!")
//     // Increment the score for heads
//     score1++
//     // Update DOM to show the new score for heads
//     playerScore.innerText = score1
//     // Otherwise, the number is 1, and the coin landed on tails
//     }else{
//     console.log("Tails!")
//     // Increment the score for tails
//     score2++
//     // Update the UI to show the new score for tails
//     compScore.innerText = score2
//     }
// }
    
    
// //a function that will reset the game and the input field
// function resetGame() {
//     // Reset the scores to 0
//     score1 = 0
//     score2 = 0
//     // Update the UI to show the new scores
//     playerScore.innerText = score1
//     compScore.innerText = score2
//     // Clear the input field
//     choiceInput.value = ""
// }
    
// //a function that will reset the scores
// function resetScores() {
//     // Reset the scores to 0
//     score1 = 0
//     score2 = 0
//     // Update the UI to show the new scores
//     playerScore.textContent = score1
//     compScore.textContent = score2
// }


// Add event listeners to the buttons
// dogeBtn.addEventListener("click", flipCoin)
// rstBtn.addEventListener("click", resetGame)
// clrBtn.addEventListener("click", resetScores)

