document.querySelector('#heads').addEventListener('click', flipCoin)
document.querySelector('#tails').addEventListener('click', flipCoin)

function flipCoin(){
  
    fetch(`/api}`)
    .then((data) => {
      console.log(data);
      document.querySelector("#Choice").innerHTML = data.HorT
      document.querySelector("#winOrLose").innerHTML = data.outcome
      document.querySelector("#comp").innerHTML = data.computer
})
}