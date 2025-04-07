document.querySelector("#heads").addEventListener("click", playerBetHeads)
document.querySelector("#tails").addEventListener("click", playerBetTails)

function playerBetHeads() {
    fetch('/api')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      if(data.coinToss === "heads"){
        document.querySelector("h2").innerText = "You win!!"
    } else {
        document.querySelector("h2").innerText = "Try again..."
    }
  })
}

function playerBetTails() {
  fetch(`/api`)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    if(data.coinToss === "tails"){
      document.querySelector("h2").innerText = "You win!!"
  } else {
      document.querySelector("h2").innerText = "Try again..."
  }
})
}