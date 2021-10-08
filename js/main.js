// activate when they choose heads button
document.querySelector('#heads').addEventListener('click', () => {
    const choice = 'heads'
    fetch(`/api?coin=${choice}`) // fetch the local API
        .then(response => response.json())
        .then(response => {
            let result = response.flip //get the result of coin flip from server
            console.log('heads fetch')
            // if pc chooses heads too, they win. if not they lose
            if(result === 'heads'){
                document.querySelector('#result').innerText = 'It was heads, you won!'
            } else {
                document.querySelector('#result').innerText = 'It was tails, you lost.'
            }
        })
})

//activate when they choose tails button
document.querySelector('#tails').addEventListener('click', () => {
    const choice = 'tails'
    fetch(`/api?coin=${choice}`)
        .then(response => response.json())
        .then(response => {
            let result = response.flip
            // winner! they chose tails and the computer chose tails
            console.log('tails fetch')
            if (result === 'tails'){
                document.querySelector('#result').innerText = 'It was tails, you won!'
            } else {
                document.querySelector('#result').innerText = 'It was heads, you lost.'
            }
        })
})