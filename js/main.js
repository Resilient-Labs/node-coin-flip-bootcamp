document.querySelector('#play').addEventListener('click', gameFlip)
function gameFlip() {
    const playerInput = document.querySelector('#player').value;
    console.log(playerInput);

    fetch(`/api?coinFlip=${playerInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector('#lineOne').textContent = data.result;
        document.querySelector('#lineTwo').textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    })
}