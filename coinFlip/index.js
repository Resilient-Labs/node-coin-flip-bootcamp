const tailsButton = document.querySelector(".tails")
const headsButton = document.querySelector(".heads")
const result = document.querySelector("#result")
const updatedResult = document.querySelector("#updatedResult")
const tailsButtonValue = document.querySelector(".tails").innerText
const headsButtonValue = document.querySelector(".heads").innerText
// const choices = ["HEADS", "TAILS"]


tailsButton.addEventListener('click', ()=>{
  flipped()
  checkResultTails()
})
headsButton.addEventListener('click', ()=>{
  flipped()
  checkResultHeads()
})


function flipped(){
  console.log(tailsButtonValue)
  const randomChoice=Math.floor(Math.random()*2);
	if(randomChoice=== 0){
    console.log("0")
    result.innerHTML = "HEADS"
	}
	else if (randomChoice === 1){
    console.log("1")
    result.innerHTML = "TAILS"
	}
}

function checkResultTails(){
  if(result.textContent === tailsButtonValue){
    updatedResult.innerHTML = "YES! You Won!"
  }else if (result.textContent !== tailsButtonValue){
    updatedResult.innerHTML = "DARN! You Lost!"
  }

}

function checkResultHeads(){
  if(result.textContent === headsButtonValue){
    updatedResult.innerHTML = "YES! You Won!"
  }else if(result.textContent !== headsButtonValue){
    updatedResult.innerHTML = "DARN! You Lost!"
  }
}
