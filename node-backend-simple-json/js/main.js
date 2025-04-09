document.querySelector('.heads').addEventListener('click', () => {
    fetch('/heads')
        .then(response => response.text())
        .then((data) => {
            document.querySelector('.results').innerText = data
        })
})

document.querySelector('.tails').addEventListener('click', () => {
    fetch('/tails')
        .then(response => response.text())
        .then((data) => {
            document.querySelector('.tails').innerHTML = data
        })
})
