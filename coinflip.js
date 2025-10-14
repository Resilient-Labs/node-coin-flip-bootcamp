const flipCoinButton = document.querySelector('#flipCoinButton');
const coinFlipResult = document.querySelector('#coinFlipResult');

flipCoinButton.addEventListener('click', () => {flipCoin()});

function flipCoin() {
    fetch('http://localhost:8080/flipCoin')
        .then(response => response.text())
        .then(data => {
            coinFlipResult.innerText = data;
        });
}