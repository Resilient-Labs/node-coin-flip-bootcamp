let coinSideSelected = '';
// listen for buttons: 
// heads 
document.querySelector('#mario').addEventListener('click', function () {
    coinSideSelected = 'Mario';
    document.querySelector('#mario').classList.add('selected');
    document.querySelector('#luigi').classList.remove('selected');
});
// tails
document.querySelector('#luigi').addEventListener('click', function () {
    coinSideSelected = 'Luigi';
    document.querySelector('#luigi').classList.add('selected');
    document.querySelector('#mario').classList.remove('selected');
});
// flip
document.querySelector('#flip').addEventListener('click', flipCoin);

// create a function that randomly chooses heads or tails
function flipCoin() {
    const randomNum = Math.random();
    let randomPick
    if (randomNum < 0.5) {
        randomPick = 'Mario'
    } else {
        randomPick = 'Luigi'
    }

    // result coin spin
    const coin = document.querySelector('#resultCoin');
    if (!coin) return;
    coin.classList.add('show');
    coin.classList.remove('spin', 'mario', 'luigi');
    setTimeout(function () {
        coin.classList.add('spin');
    }, 0);

    const powerUpSound = document.querySelector('#powerUpSound');
    if (powerUpSound) {
        powerUpSound.currentTime = 0;
        powerUpSound.play();
        console.log('sound element:', powerUpSound);
    }

    fetch(`/api?coin=${coinSideSelected}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.randomPick === 'mario' || data.randomPick === 'luigi') {
                coin.classList.add(data.randomPick.toLowerCase());
            }

        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
}
