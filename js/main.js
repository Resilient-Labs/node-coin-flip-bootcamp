//PRACTICE
//Create a simple web application that uses the fs and http modules.
//Use http to create the server and fs to read your html file.
//Include vanilla ES6 js in a script tag at the bottom of your html file.
//Try creating a coin ip guessing game!

//click event
//two buttons
//user must be able to click an option ----Heads or Tails---click event
// If they are a match  return to the dom that is a match

// let heads = 0;
// let tails = 0;
//
// function click() {
//     choice = (Math.floor(Math.random() * 2) == 0);
//     if(choice){
//     	flip("heads");
//     }else{
//         flip("tails");
//     }
// };
// function flip(coin) {
//     document.getElementById("result").innerHTML = coin;
// };
// document.querySelectorAll(".guess").forEach(function (coin){
//   coin.addEventListener("click", coinFlip)
//   console.log(coin)
// })
// function coinFlip(){
//   this.classList.add("selected");
//   let selected = document.querySelectorAll(".selected")
// }

document.querySelectorAll("button").forEach(function (coin){
 coin.addEventListener("click", flip)
 // console.log(coin)
})
//counter
let clicks=0

function flip(){

clicks+=1;
 console.log(clicks);
 document.querySelector("p").innerHTML = clicks

 let guess = Math.random()

 if (guess<.50){
   document.querySelector("img").src = ("media/tails.jpg") //finding property with the same attribute and setting it to a new src
   document.querySelector("h2").textContent = "Tails Wins!" //returning win/match to the dom
 } else{
   document.querySelector("img").src = ("media/heads.png")
   document.querySelector("h2").textContent = "Heads Wins!"
 }

 //condition to checks clicks ---heads or  tails
//   if (clicks=){
//
//   }else{
//
//
//   }
//
}
