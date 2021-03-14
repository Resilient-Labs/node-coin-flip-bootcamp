document.querySelector('#buttonHead').addEventListener('click', recordPlayerChoice)

document.querySelector('#buttonTail').addEventListener('click', recordPlayerChoice)

document.querySelector('#buttonReset').addEventListener('click', resetGame)


let choice

let score = 0

let coinH4 = document.getElementById("coin");

let image = document.createElement('img')

function recordPlayerChoice(e) {
    
    let targetedButton = e.target.id 

    choice = document.getElementById(`${targetedButton}`).innerText

    console.log(choice)

    flipCoin()

}

function flipCoin() {

    let randomNumber = Math.random()

    console.log(Math.random())

    if(randomNumber <= 0.5) {

        console.log('narwhal');
        let result = 'Narwhal'
        printCoinFlipResult('Narwhal!')

        updateScoreboard(result)

        displayNarwhal()


    } else {

        console.log('octopus');
        let result = 'Octopus'
        printCoinFlipResult('Octopus!')

        updateScoreboard(result)

        displayOctopus()

    }

}

function printCoinFlipResult(coinFlipResult) {

    document.querySelector('.h2Results'). innerText =  ""

    setTimeout(() => {
            
        document.querySelector('.h2Results'). innerText = coinFlipResult
    
    }, 2100)

}

function updateScoreboard(coinFlipResult) {

    document.querySelector('.h3Results').innerText = "";

    if(coinFlipResult === choice ) { 

        incrementScore()


        setTimeout(() => {
            
            document.querySelector('.h3Results').innerText = "Win! You guess correctly.";
        
        }, 2100)

    } else {

        setTimeout(() => {
            
            document.querySelector('.h3Results').innerText = "Incorrect guess...try again."
        
        }, 2100)

    }
}

function incrementScore() {
    
    score++

    updateScoreInDOM()
}

function updateScoreInDOM() {

    setTimeout(() => {
            
        document.querySelector('.h4Score').innerText = score
    
    }, 2100)

   
}

function resetGame() {

    score = 0
    document.querySelector('.h4Score').innerText = 0
    document.querySelector('.h3Results').innerText = ""
    document.querySelector('.h2Results'). innerText =  ""

    image.src = ''

}

function displayNarwhal() {

    let imageMushroom = coinH4.appendChild(image)

    imageMushroom.src = 'pic/mushroom.jpg'

    imageMushroom.className = 'animate-coin'


    setTimeout(() => {

        imageMushroom.src = 'pic/narwhal.png'
    
    }, 2150)

    
}

function displayOctopus() {

    let imageMushroom = coinH4.appendChild(image)

    imageMushroom.src = 'pic/mushroom.jpg'

    imageMushroom.className = 'animate-coin'


    setTimeout(() => {

        imageMushroom.src = 'pic/octopus.png'
    
    }, 2150)
}




