let score = 0

// activate when they choose heads button
document.querySelector('#heads').addEventListener('click', () => {
    const choice = 'heads'
    fetch(`/api?coin=${choice}`) // fetch the local API
        .then(response => response.json()) // if request works
        .then(data => {
            console.log(data)
            let result = data.face //get the result of coin flip from server
            // if pc chooses heads too, they win. if not they lose
            if(result == 'heads'){
                score++
                document.querySelector('#result').innerText = 'It was heads, you won!'
            } else {
                score--
                document.querySelector('#result').innerText = 'It was tails, you lost.'
            }
            document.querySelector('#score').innerText = score
        })
})

//activate when they choose tails button
document.querySelector('#tails').addEventListener('click', () => {
    const choice = 'tails'
    fetch(`/api?coin=${choice}`)
        .then(response => response.json())
        .then((data) => {
            let result = data.face
            // winner! they chose tails and the computer chose tails
            console.log(result)
            if (result == 'tails'){
                score++
                document.querySelector('#result').innerText = 'It was tails, you won!'
            } else {
                score--
                document.querySelector('#result').innerText = 'It was heads, you lost.'
            }
            document.querySelector('#score').innerText = score
        })
})