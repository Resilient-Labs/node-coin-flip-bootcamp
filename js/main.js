document.querySelector('#heads').addEventListener('click', function() {
    flippity('heads');
});

document.querySelector('#tails').addEventListener('click', function() {
    flippity('tails');
});

function flippity(userGuess) {

    fetch(`/api?coinflip=${userGuess}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#result').textContent = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}