//worked on with House Hayden: Rebecca, Kadeisha, Jeffrey, and Anastasia
const img = {
  coinImg: document.getElementById("coinImg")
}
const btn = {
  all: document.querySelectorAll('.button'),
  heads: document.querySelectorAll(".heads")[0],
  tails: document.querySelectorAll(".tails")[0],
  reset: document.getElementById("reset")
}
const game = {
  score: 0,
  flip: 0,
  msg: document.getElementById("msg"),
  click(){
    let button = [btn.heads, btn.tails]
    button.forEach((play) =>{
      play.addEventListener("click", (e) =>{
        game.flipCoin()
        game.getCoin(e, game.flip)
      })
    })
  },
  flipCoin(){
    const randomNum = Math.random();
      game.flip += randomNum
    },
  displayImg(info){
    const imgSrc = info
    img.coinImg.src = imgSrc;
  },
  getCoin(e, flip){
    fetch(`/api?coin=${flip}`)
    .then(response => response.json())
    .then(data =>{
      game.displayImg(data.src)
      game.checkCoin(e, data.side)
    })
  },
  checkCoin(e, side){
    if((e.target.classList.contains("heads") && ( side == "heads"))){
      game.msg.innerHTML = "Winner winner chicken dinner, You Got Heads!"
      game.score++
      game.printScore()
      game.flip = 0
    } else if (e.target.classList.contains("tails") && (side == "tails")){
      game.msg.innerHTML = "Winner winner chicken dinner, You Got Tails!"
      game.score++
      game.printScore()
      game.flip = 0
    } else{
      game.msg.innerHTML = "Whomp, Whomp. You lost"
      game.flip = 0
    }

  },
  printScore(){
    let score = document.getElementById("num")
    score.innerHTML = `${game.score}`
  },
  reset(){
  game.score= 0
  game.flip= 0
  game.printScore()
  img.coinImg.src = "images/heads.png"
  game.msg.innerHTML = "Press a Button to Guess!"
  }
}

game.click()
btn.reset.onclick = game.reset
