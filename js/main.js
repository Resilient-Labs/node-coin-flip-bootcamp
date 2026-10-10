//send a request to /coin-flip to make button/game functional
//Listen for click -> "Heads" or "Tails"
//Received "heads" or "tails" from the server
//Compare server result with user's guess
//Display results

//selects the coin flip options and results from the HTML
const clickedOnHeads = document.querySelector("#heads")
const clickedOnTails = document.querySelector("#tails")
const gameResult = document.querySelector("#game-result")
const coinEmoji = document.querySelector("#coin-emoji")

//listen for slicks 
clickedOnHeads.addEventListener("click",() => 
    flipCoin("heads"))

clickedOnTails.addEventListener("click", () => 
    flipCoin("tails"))

//send request to the server to send back result of the coin flip
function flipCoin (userGuess) { 
    fetch('/coin-flip') 
    .then(res => res.text())         //the text response from the server
    .then((data) => { 
        console.log(data); 

        //Display the server results ON the coin 
        if (data === "heads") { 
            coinEmoji.textContent = "🪙"
            gameResult.textContent = "🪙 Heads"
        } else{ 
            coinEmoji.textContent = "🏦"
            gameResult.textContent = "🏦 Tails"
        }

        //Comapare server game result with user's guess 
        if (data === userGuess) { 
            gameResult.textContent += " - You guessed correctly! You win!"
        } else { 
            gameResult.textContent += " - Your guess was incorrect. You lose!"
        }
        })
        .catch(err => {                //catch errors and handle issue with the request
            console.log('Error', err)
        })
}