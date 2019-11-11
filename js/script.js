const tail = document.querySelector('#head');
const head = document.querySelector('#tail');
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const coinImage = document.querySelector("#coinImage");
const winMessage = document.querySelector("#winMessage");

buttons.forEach( el => {
    el.addEventListener('click', () => {
        const buttonID = event.target.id;
        // If the user clicks on heads, send heads. Otherwise, send tails.
        const userChoice = (buttonID === "head")?("Heads"):("Tails");
        // Contact the server to gain a response
        fetch(`/api?userChoice=${userChoice}`)
            .then(res => res.json())
            .then(response => {
                console.table(response);
                // Set the image element h
                coinImage.src = response.coinImage;
                winMessage.textContent = response.message;
            })
            .catch(err => console.log(err));
    });
});
