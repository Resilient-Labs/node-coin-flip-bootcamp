document.getElementById("heads").onclick = () =>{
  fetch("/calculation")
  .then(res=>res.json())
  .then(res=>{
    let result = res.face//get result from object
    if(result==="heads"){
      document.querySelector("section").style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.marshu.com%2Farticles%2Fimages-website%2Farticles%2Fpresidents-on-coins%2Fpenny-cent-coin-head.jpg&f=1&nofb=1)";
      document.querySelector("h2").textContent = "You Win!"
    }else if (result==="tails"){
      document.querySelector("section").style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffurniture7.com%2Fapproval%2Fassets%2Fimg%2Fpenny-tails.jpg&f=1&nofb=1)"
      document.querySelector("h2").textContent = "You Lose!"
    }
  })
}
document.getElementById("tails").onclick = () =>{
  fetch("/calculation")
  .then(res=>res.json())
  .then(res=>{
    let result = res.face
    if(result==="heads"){
      document.querySelector("section").style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.marshu.com%2Farticles%2Fimages-website%2Farticles%2Fpresidents-on-coins%2Fpenny-cent-coin-head.jpg&f=1&nofb=1)"
      document.querySelector("h2").textContent = "You Lose!"
    }else if (result==="tails"){
      document.querySelector("section").style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffurniture7.com%2Fapproval%2Fassets%2Fimg%2Fpenny-tails.jpg&f=1&nofb=1)"
      document.querySelector("h2").textContent = "You Win!"
    }
  })
}
