//variables
let coin = document.querySelector('#coin')
let text = document.querySelector('h2')

//function
function game(event) {
    fetch(`/api`)
    .then(response => response.json())
    .then((data) => {
            console.log(data.flip, event.target.id);
        if (data.flip === event.target.id) {
            text.innerText = 'You won!'
        } else {
            text.innerText = 'You lost!'
        }

        if(data.flip === 'heads'){
            coin.src = 'img/1.png'
        }else{
            coin.src = 'img/2.png'
        }
    });
}

//add event listeners
document.querySelector('#heads').addEventListener('click', game)
document.querySelector('#tails').addEventListener('click', game)
//