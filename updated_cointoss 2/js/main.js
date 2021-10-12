// Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game

//event listners for player options
document.querySelector('#heads').addEventListener('click', playerchoseheads)

document.querySelector('#tails').addEventListener('click', playerchoseheads)


let counter = 0
let choice

let playerChose= document.getElementById('coin');

let option = document.createElement('img')

//   fetch(`/api?student=${userName}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector("#personName").textContent = data.name
//       document.querySelector("#personStatus").textContent = data.status
//       document.querySelector("#personOccupation").textContent = data.currentOccupation
//     });

// }

function playerchoseheads(e) {
    
    let targetedButton = e.target.id 

    choice = document.getElementById(`${targetedButton}`).innerText

    console.log(choice)

    flipCoin()

}

function flipCoin() {

    let randomNumber = Math.random()

    console.log(Math.random())

    if(randomNumber <= 0.5) {

        console.log('Heads');
        let winner= 'Heads'
        flipresult('Heads')

        clickCounter(winner)

        displayheads()


    } else {

        console.log('Tails');
        let winner = 'Tails'
        flipresult('Tails')

        clickCounter(winner)

        displaytails()

    }

}

function flipresult(coinFlipResult) {

    document.querySelector('#winner'). innerText =  ""

    setTimeout(() => {
            
        document.querySelector('#winner'). innerText = coinFlipResult
    
    }, 8001)

}

function clickCounter(coinFlipResult) {

    document.querySelector('.#winner').innerText = "";

    if(coinFlipResult === choice ) { 

        incrementcounter()


        setTimeout(() => {
            
            document.querySelector('.winner').innerText = "Yay! Good Guess.";
        
        }, 8001)

    } else {

        setTimeout(() => {
            
            document.querySelector('.winner').innerText = " Nope, try again."
        
        }, 8001)

    }
}

function counterChecker() {
    
    counter++

    updateCounter()
}

function  updateCounter() {

    setTimeout(() => {
            
        document.querySelector('.winner').innerText = counter
    
    }, 8001)

   
}

function resetOptions() {

    counter = 0
    document.querySelector('.winner').innerText = ""

    image.src = ''

}

function displayheads() {

    let coinHead = coinH4.appendChild(image)

    coinHead.className = 'animate-coin'

    coinHead.src = 'img/quarter_front.jpeg'

    


    setTimeout(() => {

        coinHead.src = 'img/quarter_front.jpeg'
    
    }, 8000)

    
}

function displaytails() {

    let coinTail = coinH4.appendChild(image)

    coinTail.className = 'animate-coin'

    coinTail.src = 'img/quarter_back.jpeg'

    


    setTimeout(() => {

        imageMushroom.src = 'img/quarter_back.jpeg'
    
    }, 8000)
}






// document.querySelector('#clickMe').addEventListener('click', makeReq)

// function makeReq(){

//   const userName = document.querySelector("#userName").value;





document.querySelector('#clickMe"').addEventListener('click', reset)

// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
// }
