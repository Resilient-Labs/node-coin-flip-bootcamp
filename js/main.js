document.querySelector('#heads').addEventListener('click', fetchHeads)
document.querySelector('#tails').addEventListener('click', fetchTails)

function fetchHeads(){
    let input = document.querySelector('#heads').value
    fetch(`/api?input=${input}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        document.querySelector('#message').innerText = 'THE COIN FLIPPED TO: ' 
        document.querySelector('#message2').innerText = 'YOU PICKED: ' 
        document.querySelector('#message3').innerText = 'WINNER OR LOSER?: ' 

        document.querySelector('#message').innerText = 'THE COIN FLIPPED TO: ' + data.flip
        document.querySelector('#message2').innerText = 'YOU PICKED: ' + data.choice
        document.querySelector('#message3').innerText = 'WINNER OR LOSER?: ' + data.result

    })
}

function fetchTails(){
    let input = document.querySelector('#tails').value
    fetch(`/api?input=${input}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        document.querySelector('#message').innerText = 'THE COIN FLIPPED TO: ' 
        document.querySelector('#message2').innerText = 'YOU PICKED: ' 
        document.querySelector('#message3').innerText = 'WINNER OR LOSER?: ' 

        document.querySelector('#message').innerText = 'THE COIN FLIPPED TO: ' + data.flip
        document.querySelector('#message2').innerText = 'YOU PICKED: ' + data.choice
        document.querySelector('#message3').innerText = 'WINNER OR LOSER?: ' + data.result

    })
}