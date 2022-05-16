// // const buttons = document.querySelectorAll('button');
// //set values for player and comp score
// let playerScore = 0;
// let compScore = 0;


// function displaySelections(player, comp) {
//     document.querySelector('.playerSelected').innerText = player
//     document.querySelector('.compSelected').innerText = comp
    
// }

// function displayRandom(random) {
//     const results = document.querySelector('.coinImg');
//     console.log(random);

//     if (random === 1) {
//         results.innerHTML = `<img src='imgs/Heads.png'>`
//        console.log(results.innerHTML)
        
//     } else {
//         results.innerHTML = `<img src='imgs/Tails.png'>`
//         console.log(results.innerHTML)
//     }
// }

// function tallyScore(random, playerTurn) {
//      //select scoreboard from DOM
//     const playerCoinDisplay = document.querySelector('.playerScore');
//     const compCoinDisplay = document.querySelector('.compScore');
//     const winnerDisplay = document.querySelector('.winningCoin');
//     console.log(playerCoinDisplay)
//     console.log(compCoinDisplay)
//     console.log(winnerDisplay)

//     if (playerTurn === random) {
//         playerScore++;
//         console.log(playerTurn)
//         console.log(playerScore)
//     } else {
//         compScore++;
//         console.log(compScore)
//     }
//     playerCoinDisplay.textContent = `${playerScore}`;
//     compCoinDisplay.textContent = `${compScore}`;
//     if (playerScore === 5 && compScore === 5) {
//         winnerDisplay.innerHTML = `<h1>Tie Game!</h1>`;
//     } else if (playerScore === 5) {
//         winnerDisplay.innerHTML = `<h1>Player is Lit! </h1>`;
//     } else if (compScore === 5) {
//         winnerDisplay.innerHTML = `<h1>Computer Wins!</h1>`;
//     }
//     console.log(playerScore)
//     console.log(compScore)
// }

// //add an event listener to the buttons
// buttons.forEach(function (button) {
//     button.addEventListener('click', function (e) {
//         //Computer randomly select heads or tails
//         let random = Math.round(Math.random());
//         console.log(random, "random")
//         //Computer selects a random 'heads' or 'tails
//         // let compTurn = Math.round(Math.random());

//         //Record computers selection
//         // let compSelected;
//         // if (compTurn === 1) {
//         //     compSelected = 'heads';
//         //     console.log(compTurn)
//         //     console.log(compSelected)
//         // } else {
//         //     compSelected = 'tails';
//         //     console.log(compTurn)
//         //     console.log(compSelected)
//         // }

//         //Record users selection
//         let playerSelected = e.target.classList;
//         let compSelected = random ==  1 ? 'heads' : 'tails' 
//         let playerTurn;
//         console.log(e)
//         console.log(e.target.classList)

//         if (playerSelected === 'heads') {
//             playerTurn = 1;
//         } else {
//             playerTurn = 0;
//         }

//         //displays the player and computer's selection
//         //in the Selected portion of DOM
//         displaySelections(playerSelected, compSelected );
//         displayRandom(random);



//         //Adds the score of the player and computer
//         setTimeout(function () {
//             tallyScore(random, playerTurn);
//         }, 2000);

//     })
// })

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', headsOrTails))
let playerScore = 0
let compScore = 0
const winnerDisplay = document.querySelector('.winningCoin');
function headsOrTails(e) {

    let playerSelected = e.target.classList;
    document.querySelector('.playerSelected').innerText = playerSelected
    
    fetch(`/api?playerChoice=${playerSelected}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.playerWin == true){
            document.querySelector('.playerScore').innerText = playerScore           
            playerScore++
        } else{
            compScore++
            document.querySelector('.compScore').innerText = compScore
        }
        document.querySelector('.coinImg').innerHTML = `<img src='imgs/${data.coinFlip}.png'>`
        if(playerScore == 6){
        winnerDisplay.innerHTML = `<h2> The Player Won! </h1>`
          return  
        } else if (compScore == 5){
            winnerDisplay.innerHTML = `<h2>The Computer Wins! </h1>`
            return
        }
        });

}