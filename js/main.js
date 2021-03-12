let coin = document.querySelector(".coin")
let flipCounter = 0
document.querySelector("button").addEventListener( "click", coinFlip)

function coinFlip(){
  flipCounter++

  let coinLanding = Math.random()
    if(coinLanding< .5){
      console.log("tails");
      coin.classList.add("isFlipped")
      document.querySelector("h2").innerText = `Result: Tails \nFlip Count: ${flipCounter}`
    }else{
      console.log("heads");
      coin.classList.remove("isFlipped")
      document.querySelector("h2").innerText = `Result: Heads \nFlip Count: ${flipCounter}`
    }
}
