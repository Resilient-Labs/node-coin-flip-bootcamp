let botScore = 0
let playerScore = 0

document.getElementById('head').addEventListener('click', sendReq)
document.getElementById('tail').addEventListener('click', sendReq)

function sendReq(click) {
    fetch(`/api?choice=${click.target.id}`)
    .then (res => res.json())
    .then (data => {

        console.log(data)
        document.querySelector('h2').innerHTML = data.outcome

        if (data.winner === 'player') {
            playerScore++
            document.getElementById('humanScore').innerText = playerScore
        } else if (data.winner === 'bot') {
            botScore++
            document.getElementById('botScore').innerText = botScore
        }
    })
    .catch (err => console.error('Error:', err));
    };


//We have two players defined, one human and one bot, in a game of Coin Toss
//We have two buttons, one for choosing heads or tails
//We can see a visible starting score for both player and bot
//We have a function that runs on click when choosing either heads or tails
//First player chooses a head or tail button choice on click
//We can have a button that creates a coin toss on click
//On coin toss, math random will have a 50% chance of either head or tails turning up
//On the result, if the player's choice was correct, display win message or loss message
//After result of win or loss, update the visible score of both player and bot

//function list:
//Attempt 1 from using rock paper scissors as reference
// var botScore=0,
// 	playerScore=0;
// console.log('Hello World')
// //function 1: On click Player Chooses Head    
// document.getElementById("head").onclick=playerChooseHead;
// function playerChooseHead(){
//     var botChoice = getOtherChoice();
//     checkWhoWon(botChoice, "head");
// }
// //function 2: On click Player Chooses Tail
// document.getElementById("tail").onclick=playerChooseTail;
// function playerChooseTail(){
// 	var botChoice= getOtherChoice();
// 	checkWhoWon(botChoice,"tail");
// }
// //function 3: Bot gets the opposite choice after player chooses first, with if and else statement
// function getOtherChoice(){
// 	var playerChoice= playerChooseHead();
// 	if(playerChoice === playerChooseHead){
// 		botChoice="tail";
// 	}
// 	else if(playerChoice !== playerChooseHead){
// 		botChoice="head";
// 	}
// 	return botChoice;
// }
// //function 4: Math Randomizer to see probability of coin landing on either heads or tails
// function getRandomCoin(){
//     var randomNumber=Math.random();
// 	var result = "head";

// 	if(randomNumber<.5){
// 		result="tail";
// 	}
//     displayCoinToss(result);
// }
// //function 4.5: Display result from randomizer coin toss inside empty hd/id=coinResult tag
// function displayCoinToss(){
//     document.getElementById("coinResult").innerText=result;
// }
// //function 5: Check Who Won, with if and else statement and math probability
// function checkWhoWon(result,playerChoice){
//     if(result =="tail" && playerChoice=="head"){
//     increaseBotScore();	
// 	}
// 	else{
// 		increasePlayerScore();
// 	}
// }
// //function 6: Function to increase bot score with text for loss message to player
// function increaseBotScore(){
// 	botScore+=1;
// 	document.getElementById("botScore").innerHTML=botScore;
// 	displayCompleteMessage("Sorry, you're a big FAT LOSER");
// }
// //function 7: Function to increase player score with text for win message to player
// function increasePlayerScore(){
// 	playerScore+=1;
// 	document.getElementById("humanScore").innerHTML=playerScore;
// 	displayCompleteMessage("Guess, you're a winna winna chicken dinna");
// }
// //function 8: Function to display win or loss message in empty h2/status id tag
// function displayCompleteMessage(msg){
// 	document.getElementById("status").innerHTML=msg;
// }


//Rock Paper Scissors JS Reference
// var botScore=0,
// 	playerScore=0;

// document.getElementById("rock").onclick=playerThrowsRock;
// function playerThrowsRock(){
// 	var botsWeapon= getRandomWeapon();
// 	checkWhoWon(botsWeapon,"rock");
// }
// document.getElementById("scissors").onclick=playerThrowsScissors;
// function playerThrowsScissors(){
// 	var botsWeapon= getRandomWeapon();
// 	checkWhoWon(botsWeapon,"scissors");
// }
// document.getElementById("paper").onclick=playerThrowsPaper;
// function playerThrowsPaper(){
// 	var botsWeapon= getRandomWeapon();
// 	checkWhoWon(botsWeapon,"paper");
// }
// function getRandomWeapon(){
// 	var randomNumber=Math.random();
// 	var botsWeapon="rock";
// 	if(randomNumber<.5){
// 		botsWeapon="scissors";
// 	}
// 	else if(randomNumber>.5){
// 		botsWeapon="paper";
// 	}
// 	return botsWeapon;
// }