let choices = document.querySelectorAll('button')

choices.forEach((choice) => choice.addEventListener('click', startFlip))

// choice.forEach(button => button.addEventListener('click', startFlip))

function startFlip(e){
    // parameter being pulled into the fetch
    // const coinValue = Math.random()
    // console.log(coinValue)
    let coinChoice = e.target.innerText
    fetch(`/api?coinSide=${coinChoice}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            if(data.status === "win"){
                document.querySelector('h2').innerText = `You guessed ${data.userChoice}, the result is ${data.coinResult}. You win!`
            }else{
                document.querySelector('h2').innerText = `You guessed ${data.userChoice}, the result is ${data.coinResult}. You lose!`
            }

            let headsImg = document.querySelector('#headsImg')
            let tailsImg = document.querySelector('#tailsImg')

            if (data.coinResult === 'Heads'){
                headsImg.classList.remove('hidden')
                tailsImg.classList.add('hidden')
            }else if(data.coinResult === 'Tails'){

                headsImg.classList.remove('hidden')
                tailsImg.classList.add('hidden')
            }
    });
}

// document.querySelector('#clickMe').addEventListener('click', makeReq)

// function makeReq(){

//   const userName = document.querySelector("#userName").value;

//   fetch(`/api?student=${userName}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector("#personName").textContent = data.name
//       document.querySelector("#personStatus").textContent = data.status
//       document.querySelector("#personOccupation").textContent = data.currentOccupation
//     });

// }