let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipCoin = document.querySelector("#flip-button");
let resetButton = document.querySelector("#reset-button");

flipCoin.addEventListener("click", flipCoinHandler);

function flipCoinHandler() {
    coin.style.animation = "none";
    fetch(`api`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            if (data.flip === 'heads') {
                setTimeout(function () {
                    coin.style.animation = "spin-tails 3s forwards";
                }, 100);
                heads++;
            }
            else {
                setTimeout(function () {
                    coin.style.animation = "spin-heads 3s forwards";
                }, 100);
                tails++;
            }
            setTimeout(updateStats, 3000);
            disableButton();
        })
};
function updateStats() {
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}
function disableButton() {
    flipCoin.disabled = true;
    setTimeout(function () {
        flipCoin.disabled = false;
    }, 3000);
}
resetButton.addEventListener("click", () => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});