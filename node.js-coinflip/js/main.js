document.querySelector(".button").addEventListener("click", makeGuess);

function makeGuess() {
    let userInput = document.querySelector(".userInput").value;

    if (userInput === "") return alert("Must enter a valid guess");

    // Simulate a coin flip using Math.random()
    const random = Math.random() < 0.5 ? 'Heads' : 'Tails';
    const winOrLoss = userInput.toLowerCase() === random.toLowerCase() ? 'win' : 'loss';

    document.querySelector(".coinResult").innerText = `The coin is ${random}`;
    document.querySelector(".status").innerText = `You ${winOrLoss}`;

    document.querySelector(".userInput").value = "";
}
