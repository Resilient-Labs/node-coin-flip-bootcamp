document.querySelector('#heads').addEventListener('click', fetchHeads)
document.querySelector('#tails').addEventListener('click', fetchTails)
let winCounter = 0
let loseCounter = 0

function fetchHeads(){
    let input = document.querySelector('#heads').value
    fetch(`/api?input=${input}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        document.querySelector('#message').innerText = 'CURRENT COIN FACE: ' 
        document.querySelector('#message2').innerText = 'YOUR COIN CHOICE: ' 
        document.querySelector('#message3').innerText = 'RESULT: ' 

        document.querySelector('#message').innerText = 'CURRENT COIN FACE: ' + data.flip
        document.querySelector('#message2').innerText = 'YOUR COIN CHOICE: ' + data.choice
        document.querySelector('#message3').innerText = 'RESULT: ' + data.result
        if(data.result === 'WINNER'){
            winCounter++
        }
        else{
            loseCounter++
        }
        document.querySelector('#message4').innerText = 'WIN COUNT: ' + winCounter
        document.querySelector('#message5').innerText = 'LOSE COUNT: ' + loseCounter
    })
}

function fetchTails(){
    let input = document.querySelector('#tails').value
    fetch(`/api?input=${input}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        document.querySelector('#message').innerText = 'CURRENT COIN FACE: ' 
        document.querySelector('#message2').innerText = 'YOUR COIN CHOICE: ' 
        document.querySelector('#message3').innerText = 'RESULT: ' 

        document.querySelector('#message').innerText = 'CURRENT COIN FACE: ' + data.flip
        document.querySelector('#message2').innerText = 'YOUR COIN CHOICE: ' + data.choice
        document.querySelector('#message3').innerText = 'RESULT: ' + data.result

        if(data.result === 'WINNER'){
            winCounter++
        }
        else{
            loseCounter++
        }
        document.querySelector('#message4').innerText = 'WIN COUNT: ' + winCounter
        document.querySelector('#message5').innerText = 'LOSE COUNT: ' + loseCounter

        
    })
}