document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq() {

  const userSelection = document.querySelector("input[name = coin]:checked").value;

  fetch(`/api?choice=${userSelection}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#result").textContent = `Coin landed on ${data.tossResult}. You guessed ${data.result}.`
      // console.log(`Toss Result: ${data.tossResult}`)
      // console.log(`User guess: ${data.userSelection}`)
      // console.log(`The user guessed: ${data.result}`)

    });
}