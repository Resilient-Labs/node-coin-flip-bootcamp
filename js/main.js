document.querySelector('#clickMe').addEventListener('click', makeReq);

let player1 = 'player one';
let player2 = 'player two';

let heads = 'heads';
let tails = 'tails';

let randomInt = getRan(1,2);
const winningNum = getRan(1,2);
let firstPlayer = getRan(1,2);

let firstClick = false;

const delay = ms => new Promise(r => setTimeout(r,ms));

async function makeReq() {
    try{
        //getRan(1,2);
    //getfirstPlayer();
        fetch('/coinflip')
        .then(response => response.json())
        .then((data => {
            //console.log(data);
            //console.log('clicked');
            console.log(data.result);
            const result = data.result;
            getfirstPlayer(result);
            //const playerResult = await getfirstPlayer(data.result)
        }))
    }
    catch (err) {
        console.error('error fetching data', err);
    }
    
}

function getRan(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getfirstPlayer(coinFlip) {
    if(!firstClick) {
        firstClick = true;
        //getRan(1,2);
        if(coinFlip == 1) {
            console.log(`You are ${player1}`)
        }   
        if(coinFlip == 2) {
            console.log(`You are ${player2}`)
        }
    }
await delay(2000);
    flip();
}

async function flip() {
    getRan(1,2);
    if(winningNum == 1) {//heads
        console.log(`I call ${heads}`)
    }
    if(winningNum == 2) {//tails
        console.log(`I call ${tails}`)
    }

    if(randomInt == 1) {//heads
        console.log(`You got ${randomInt}, which is ${heads}`)
    }
    if(randomInt == 2) {//tails
        console.log(`You got ${randomInt}, which is ${tails}`)
    }
await delay(2000);
    determiner();
}

async function determiner() {
    
    if(randomInt === winningNum) {
        console.log('You win!')
    }
    else {
       location.reload(true); 
    }
}