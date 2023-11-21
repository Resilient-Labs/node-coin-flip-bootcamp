document.querySelector('button').addEventListener('click', flipCoin)

function flipCoin() {
    const guess = document.querySelector('input[name="face"]:checked').value

    fetch(`/api?guess=${guess}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            document.querySelector('#face').innerText = data.flipResult
            document.querySelector('#winLose').innerText = data.winLose
        })
}