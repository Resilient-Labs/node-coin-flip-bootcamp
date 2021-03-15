const choice = document.querySelector('h2');
const outcome = document.querySelector('h3');
const changeBtn = document.querySelector('#change');
const yourScore = document.querySelector('#you');
const flipBtn = document.querySelector('#flip');
const computerScore = document.querySelector('#computer');

changeBtn.addEventListener('click', changeChoice);
flipBtn.addEventListener('click', flip);

let yScore = 0,
    cScore = 0,
    yChoice = 0;

function changeChoice() {
    if (choice.innerText === 'HEADS'){
        yChoice = 1;
        choice.innerText = 'TAILS';}
    else{
        yChoice = 0;
        choice.innerText = 'HEADS';
    }
}

function flip() {
    const result = Math.floor(Math.random() * 2 + 1);
    let display;
    if (result % 2 === 0){ 
        if(yChoice === 0)
            yScore++;
        else
            cScore++;
        display = 'HEADS';
    }
    else {
        if(yChoice === 1)
            yScore++;
        else
            cScore++;
        display =  'TAILS';
    }
    yourScore.innerText = yScore;
    computerScore.innerText = cScore;
    outcome.innerText = display;
}