document.querySelectorAll('button').forEach(function(press){

 press.addEventListener("click", coinFlip)
})
let winCount=0, lossCount=0;
function coinFlip(){
  let guess= this.value;
  flip();
  compare(guess);
}
function flip(){
  let toss = Math.random();
  result = "";
  if(toss<.50){
  document.querySelector('img').src = ('images/tails.png')
  document.querySelector('h2').textContent = 'The coin landed on tails'
  result = "Tails"
  } else {
  document.querySelector('img').src = ('images/heads.png')
  document.querySelector('h2').textContent = 'The coin landed on heads'
  result = "Heads"
  }
  return result;
}
function compare(guess){
  console.log(guess)
  if(guess==result){
    document.querySelector('p').textContent = 'Which means you win!'
    winCount = winCount + 1;
    document.getElementById("wins").innerText = winCount
  }else{
    document.querySelector('p').textContent = 'Which means you lose!'
    lossCount += 1;
    document.getElementById("losses").innerText = lossCount
  }
}
