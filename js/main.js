document.querySelector("button").onclick = flipCoin;

function flipCoin(e) {
  e.preventDefault();
  const guess = document.querySelector("input[name='coin']:checked").value;

  // call api to flip coin - heads or tails
  fetch(`/api?guess=${guess}`)
    .then((res) => res.json())
    .then((data) => {
      // render result of flip
      document.querySelector("h3").innerText = data.result;
    })
    .catch((err) => console.error(err));
}
