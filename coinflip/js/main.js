document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq() {
  const userGuess = document.querySelector("#guess").value;

  fetch(`/random?guess=${userGuess}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#results").innerText = data.winOrLoss
    });
}
