const buttons = document.querySelectorAll('button');
let playerScore = 0;
let compScore = 0;

function displaySelections(player, comp) {
    document.querySelector('.playerSelected').innerText = player
    document.querySelector('.compSelected').innerText = comp

}

function tallyScore(random, playerTurn) {
    const playerCoinDisplay = document.querySelector('.playerScore');
    const compCoinDisplay = document.querySelector('.compScore');
    const winnerDisplay = document.querySelector('.scoreCheck');
    console.log(playerCoinDisplay)
    console.log(compCoinDisplay)
    console.log(winnerDisplay)

    if (playerTurn === random) {
        playerScore++;
        console.log(playerTurn)
        console.log(playerScore)
    } else {
        compScore++;
        console.log(compScore)
    }
    playerCoinDisplay.textContent = `${playerScore}`;
    compCoinDisplay.textContent = `${compScore}`;
    if (playerScore === 5 && compScore === 5) {
        winnerDisplay.innerHTML = `<h1>Tie Game!</h1>`;
    } else if (playerScore === 5) {
        winnerDisplay.innerHTML = `<h1>Player wins!</h1>`;
    } else if (compScore === 5) {
        winnerDisplay.innerHTML = `<h1>Computer Wins!</h1>`;
    }
    console.log(playerScore)
}

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let random = Math.round(Math.random());
        console.log(random, "random")
         let compTurn = Math.round(Math.random())
        
         let compSelected;
         if (compTurn === 1) {
             compSelected = 'heads';
             console.log(compTurn)
             console.log(compSelected)
         } else {
             compSelected = 'tails';
             console.log(compTurn)
             console.log(compSelected)
         }
        let playerSelected = e.target.classList;
        let playerTurn;
        console.log(e)
        console.log(e.target.classList)
        if (playerSelected === 'heads') {
            playerTurn = 1;
        } else {
            playerTurn = 0;
        }
        displaySelections(playerSelected, compSelected);

        setTimeout(function () {
            tallyScore(random, playerTurn);
        }, 2000);
    })
})