
let heads = 0;
let tails = 0;

document.addEventListener("DOMContentLoaded", () => {
    const guessHeadsButton = document.getElementById('guess-heads');
    const guessTailsButton = document.getElementById('guess-tails');

    if (guessHeadsButton && guessTailsButton) {
        guessHeadsButton.onclick = () => click('heads');
        guessTailsButton.onclick = () => click('tails');
    }
});

function click(userGuess) {
    var x = Math.floor(Math.random() * 2) === 0;
    var flipResult = x ? "heads" : "tails";
    flip(userGuess, flipResult);
}

function flip(userGuess, flipResult) {
    if (userGuess === flipResult) {
        document.getElementById("result").innerHTML = `You guessed ${userGuess} and it was ${flipResult}. You win!`;
    } else {
        document.getElementById("result").innerHTML = `You guessed ${userGuess} but it was ${flipResult}. Try again!`;
    }
}


