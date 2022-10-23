const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", headsOrTails));
let playerScore = 0;
let compScore = 0;

function headsOrTails(e) {
  let playerSelected = e.target.classList;
  document.querySelector(".playerSelected").innerText = playerSelected;

  fetch(`/api?playerChoice=${playerSelected}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.playerWin == true) {
        document.querySelector(".playerScore").innerText = playerScore;
        playerScore++;
      } else {
        compScore++;
        document.querySelector(".compScore").innerText = compScore;
      }
      document.querySelector(
        ".coinImg"
      ).innerHTML = `<img src='imgs/${data.coinFlip}.png'>`;

      if (playerScore === 20 || compScore === 20) {
        alert("GAME OVER CHECK THE SCORE!");
        window.location.reload();
      }
    });
}
