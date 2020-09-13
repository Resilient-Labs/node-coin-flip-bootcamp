let buttonHead = document.getElementById('buttonHead')
let buttonTail = document.getElementById('buttonTail')
let results = document.getElementById('results')
let feedback = document.getElementById('feedback')
buttonHead.addEventListener('click', playHeads)
buttonTail.addEventListener('click', playTails)

function playHeads() {
    play("heads")
}

function playTails() {
    play("tails")
}

function play(chosenSide) {
    fetch(`/api`)
        .then(response => response.json())
        .then((data) => {
            //heads/tails image
            if (data.checker === "heads") {
                results.innerHTML = `<img src="https://images-na.ssl-images-amazon.com/images/I/51xs7F%2BtP5L._AC_.jpg" alt="">`;
            } else {
                results.innerHTML = `<img src="https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png" alt="">`;
            }
            //feedback
            if (data.checker === chosenSide) {
                feedback.innerHTML = `You got it right`;
            } else {
                feedback.innerHTML = `You got it wrong`;
            }
        });
}
