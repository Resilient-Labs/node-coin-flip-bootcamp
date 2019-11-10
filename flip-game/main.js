

document.querySelector("#headsButton").onclick= () =>{
  fetch("/calculation")
  .then(res=>res.json())
  .then(res=>{
    let result =res.face //get reult from object
    if(result ==="heads"){
     document.querySelector(".coinSpace").style.backgroundImage = "url(https://www.gambling911.com/files/styles/article_image/public/publisher/Super-Bowl-Coin-Toss-Heads-020316L.jpg?itok=L4jga2uu)"
     document.querySelector("h2").textContent ="You Win"
   } else if (result==="tails"){
     document.querySelector(".coinSpace").style.backgroundImage = "url(https://library.kissclipart.com/20180918/bqe/kissclipart-quarter-tails-png-clipart-quarter-coin-penny-4803ab755611ed9d.jpg)"
    document.querySelector("h2").textContent= "You Lost"
   }
  })
}
document.querySelector("#tailsButton").onclick= () =>{
  fetch("/calculation")
  .then(res=>res.json())
  .then(res=>{
    let result =res.face //get reult from object       
    if(result ==="tails"){
     document.querySelector(".coinSpace").style.backgroundImage = "url(https://library.kissclipart.com/20180918/bqe/kissclipart-quarter-tails-png-clipart-quarter-coin-penny-4803ab755611ed9d.jpg)"
     document.querySelector("h2").textContent ="You Win"
   } else if (result==="heads"){
     document.querySelector(".coinSpace").style.backgroundImage = "url(https://www.gambling911.com/files/styles/article_image/public/publisher/Super-Bowl-Coin-Toss-Heads-020316L.jpg?itok=L4jga2uu)"
    document.querySelector("h2").textContent= "You Lost"
   }
  })
}
