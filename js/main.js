document.querySelector("#clickMe").addEventListener("click", makeReq);

function makeReq() {
	const userGuess = document.querySelector("#userName").value.trim();

	fetch(`/api?coin=${userGuess}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			document.querySelector("#result").textContent = `The coin landed on ${
				data.resultOfToss
			}. You guessed ${
				data.userGuessedCorrectly ? "correctly" : "incorrectly" // of this is truthy or falsy it will return correct and or incorrectly
			}!`;
		});
}
