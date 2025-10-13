document.querySelector('button').addEventListener ('click', getCoin)

function getCoin() {
    fetch(`/flipCoin`)
    .then(response => response.text())
    .then((data) => {
        console.log(data);
        document.querySelector('p').textContent = data;
    });
    // .catch(err => console.error('Fetch error:', err));
}