const flipBtn = document.querySelector('.flip')
const resetBtn = document.querySelector('.reset')

flipBtn.addEventListener('click',flipCoin)
resetBtn.addEventListener('click', resetGame)

let playerChoice = document.querySelector('.playerChoice')


function flipCoin(){
  let coinFace =playerChoice.value
  document.querySelector('.coin').classList.add(`${coinFace}`)
resetGame()

console.log(playerChoice)
// let coinResult=randomizeToss()

// document.querySelector('.coin').classList.add(coinResult)

// console.log(coinResult)
// console.log(finalResult)

//* compareResults(playerChoice,coinResult)

fetch(`/api?coinT=${coinFace}`)
.then(response => response.json())
.then((data) => {
  console.log(data);
   if(data.coinLand === 'win' ){
    document.querySelector('#coinResult').innerText = 'It\'s your lucky day! 🍀 '
   } else if(data.coinLand === 'lose'){
    document.querySelector('#coinResult').innerText = 'Tough luck! ☹️'
   }
    //true / false by default ( acts like an if/ else
    // document.querySelector('.coin').classList.add(data.coinLand)
     if(data.imageDisplay ===1){
       document.querySelector('.coin').classList.add('heads')
     }else{
       document.querySelector('.coin').classList.add('tails')
     }


});

}

//  function randomizeToss(){
//    let probability = Math.floor(Math.random() * 2

//    if(probability===1 && playerChoice === 'heads'){
//      return 'win'
//    }else if(probability===2 && playerChoice === 'tails'){
//      return 'win'
//    }else if (probability===1 && playerChoice !== 'heads'){
//      return 'lose'
//    }else if (probability===2 && playerChoice !== 'tails'){
//      return 'lose'
//    }
//    //assign strings a value of # 1 0 
//  }

// function compareResults(playerChoice,coinResult){
//   // let finalResult= compareResults(playerChoice,coinResult)
//  let finalResult = playerChoice === coinResult
//  if(finalResult === true){
//   document.querySelector('#coinResult').innerText = 'It\'s your lucky day! 🍀 '
//  } else{
//   document.querySelector('#coinResult').innerText = 'Tough luck! ☹️'
//  }
//   //true / false by default ( acts like an if/ else

// }
 

function resetGame(){
document.querySelector('.coin').classList = ['coin'] 
document.querySelector('#coinResult').innerText = ''

}




/*Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. 

//define variables
add event listeners 
button to flip the coin- either display heads img or tails img

button to 'flip'/ display the images  & button to reset the game 
function to decide which image to display */





/*functions to randomize the draw of the coin heads or tails &




// function to check the result and display if the user guessed correctly or not (if else statement)*/


//integrate point count? 

