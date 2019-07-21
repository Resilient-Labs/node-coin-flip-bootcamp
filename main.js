document.getElementById('heads').onclick = checkHead;
//the below function is only to flip the coin
function flipCoin() {
  let result = Math.ceil(Math.random()*2)
  if (result === 1) {
    document.querySelector("img").src = "sal1.png"
    return 'heads'
  }
  else if (result === 2){
    document.querySelector("img").src = "sal2.png"
    return 'tails'
  }
}
document.getElementById('tails').onclick = checkTail;

function checkHead() {
  let result = flipCoin()
  let head = document.getElementById('heads').value
  if (result === 'heads'&& result === head){
    alert("You won!")
  }else{
    alert ("Try again!")
  }
}
function checkTail() {
  let result = flipCoin()
  let tails = document.getElementById('tails').value
  if (result === 'tails'&& result === tails){
    alert("You won!")
  }else{
    alert ("Try again!")
  }
}
