document.querySelector("button").onclick = flipCoin;

function flipCoin() {
  // call api to flip coin - heads or tails
  fetch("/api/flip")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // render result of flip
      document.querySelector("p").innerText = data.result;
    })
    .catch((err) => console.error(err));
}
