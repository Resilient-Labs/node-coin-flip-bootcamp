// Add event listener for button click
document.querySelector('button').addEventListener('click', flippingIt);

// Function to handle button click event
function flippingIt() {
  const coinSelector = document.querySelector('#coinSelec').value;
  // Fetch
  fetch(`/api?coins=${coinSelector}`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);

      //add textContent paths//
      document.querySelector('#playerChoice').textContent = data.humanChoice;
      document.querySelector('#botChoice').textContent = data.winnerMessage;
      document.querySelector('.resultMessage').textContent = data.flippingResult;
    })
    .catch(error => console.error(error));
}
