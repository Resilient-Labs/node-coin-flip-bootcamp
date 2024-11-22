function guess(userGuess) {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    const getResult = document.getElementById('results');
    const flipCoin = document.getElementById('coinFlip');

    // flip animation
    flipCoin.classList.add('flip');

    // show result after flip animation
    setTimeout(() => {
        flipCoin.textContent = result;
        flipCoin.classList.remove('flip');

        // Show result
        if (userGuess === result) {
            getResult.textContent = `Congrats! You guessed ${userGuess} and it was ${result}.`;
        } else {
            getResult.textContent = `You guessed ${userGuess} but it was ${result}. Try again!`;
        }
    }, 1000); // Matches the duration of the flip animation
}