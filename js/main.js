let heads = document.getElementById('heads')

let tails = document.getElementById('tails')

let reset = document.getElementById('reset')

let coinFlip = null

let counter = 0

let winner = null 

let bet = null

heads.addEventListener('click', setBetHeads)
tails.addEventListener('click', setBetTails)
reset.addEventListener('click', resetGame)


function flipCoin(){
    fetch(`/api?bet=${bet}`)
    .then(res => res.json())
    .then(data => {
        if (data.winner === true){
            counter++
            document.getElementById('counter').innerText = counter
            document.getElementById('msg').innerText = "You're a lucky one!"
            if (counter === 3){
                document.getElementById('msg').innerText = "YOU WON!"
                setTimeout(resetGame, 2000)
            } 
        } else {
            counter -= 1
            document.getElementById('counter').innerText = counter
            document.getElementById('msg').innerText = "Maybe you're not so lucky :("
                if (counter === -3){
                    document.getElementById('msg').innerText = "You are very unlucky!"
                    setTimeout(resetGame, 2000)
                }
        }

        })
        .catch(err => {
            console.log(`error {err}`)
        })
}

function setBetHeads(){
    bet= 'heads'
    flipCoin()

   document.getElementById('counter').classList.remove('hide')
}

function setBetTails(){
   bet= 'tails'
   flipCoin()
   document.getElementById('counter').classList.remove('hide')
}


function resetGame(){
    counter = 0
    document.getElementById('counter').classList.add('hide')
}



