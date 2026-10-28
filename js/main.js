document.querySelector('button').addEventListener('click', flip_coin)

function flip_coin() {
    const choice = document.querySelector("#userChoice").value.toLowerCase();

  fetch(`/flip?choice=${choice}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        console.log(`choice: "${choice}"  result: "${data.result}"`)

        if (choice === data.result) {
            document.querySelector('#result').innerHTML = `It's ${data.result}! You won!`
        } else {
            document.querySelector('#result').innerHTML = `It's ${data.result}! You lost!`
        }
    })
}