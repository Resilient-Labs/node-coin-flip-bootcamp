let headsBtn = document.querySelector("#heads")
let tailsBtn= document.querySelector("#tails")

headsBtn.addEventListener("click", () =>{
// alert("heads")
fetch("/calculation")
  .then(res => res.json())
  .then((res) => {
    let result = res.face
    if(result==="heads"){
      document.querySelector("#coin").style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.marshu.com%2Farticles%2Fimages-website%2Farticles%2Fpresidents-on-coins%2Fpenny-cent-coin-head.jpg&f=1&nofb=1)"
      document.querySelector("h2").textContent = "You Win!"
    }else if(result==="tails"){
      document.querySelector("#coin").style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffurniture7.com%2Fapproval%2Fassets%2Fimg%2Fpenny-tails.jpg&f=1&nofb=1)"
      document.querySelector("h2").textContent = "You Lose!"
}
}
})
})
tailsBtn.addEventListener("click", () =>{
// alert("tails")
fetch("/calculation")
  .then(res => res.json())
  .then((res) => {
    let result = res.face
    if(result==="tails"){
      document.querySelector("#coin").style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffurniture7.com%2Fapproval%2Fassets%2Fimg%2Fpenny-tails.jpg&f=1&nofb=1)"
      document.querySelector("h2").textContent = "You Win!"
    }else if(result==="heads"){
      document.querySelector("#coin").style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.marshu.com%2Farticles%2Fimages-website%2Farticles%2Fpresidents-on-coins%2Fpenny-cent-coin-head.jpg&f=1&nofb=1)"
      document.querySelector("h2").textContent = "You Lose!"
}
}
})
})
