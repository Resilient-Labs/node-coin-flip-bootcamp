
  document.querySelector('#clickMe').addEventListener('click', flipACoin)

  function flipACoin(){
    const userInput = document.querySelector('#userInput').value

      fetch(`/api?penny=${userInput}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        document.querySelector('#playersChoice').textContent = data.playersChoice
        document.querySelector('#coinRandom').textContent = data.coinRandom
        document.querySelector('#whoWon').textContent = data.whoWon
      })
    }

  // document.querySelector('#clickMe').addEventListener('click', flipACoin)


























// const headsInput = document.querySelector('#head')
// const tailsInput = document.querySelector('#tail')
// const flipButton = document.querySelector('#clickMe')
// const result = document.querySelector('h2')

// function reverseString(){
//   const str1 = wordInput.value
//   fetch(`/api$student=${str1}`)
//   .then(res => res.json)
//   .then((data) => {
//     console.log(data)
//     reverse.textContent = data.keepItP
//   })
// }


// function  flipCoin(){
//   if(Math.random() < 0.5){
//     return "Heads"
//   }else {
//     return "Tails"
//   }
// }

// function flipResults(e){
//   e.preventDefault()
//   const headsInput = document.querySelector('#head').value
//   const tailsInput = document.querySelector('#tail').value
//   if(headsInput === flipCoin() || tailsInput === flipCoin()){
//     result.innerText = "winner"
//   }else{
//     result.innerText = "Loser"
//   }
  
// }

// flipButton.addEventListener('click', flipResults)


  


