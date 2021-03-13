document.querySelectorAll(".coin").forEach(button => button.addEventListener('click', randomizeCoin))

const modalBody = document.querySelector(".modal-body")
const modalTitle = document.querySelector(".modal-title")
const heads = { number: 1, text: `heads` };
const tails = { number: 0, text: `tails` };
// let total = 0;

// choose a coin and click
// when clicked it will randomly decide between tails or heads as winner 
function randomizeCoin() {
    // generate a random number using math.random between the 2 coins and round to the nearest whole with math floor
    const randomNumber = Math.floor(Math.random() * 2)
    const tailsWon = randomNumber === tails.number;
    if(tailsWon) {
        changeModalText(tails.text)
    } else {
        changeModalText(heads.text)
    }
};

function changeModalText(message) {
    modalTitle.innerText = `Winner is ${message}!`
    modalBody.innerHTML = `<img src="img/${message}.png" alt="${message}">`;
};
