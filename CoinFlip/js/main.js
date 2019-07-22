
// object cant pump out, function;

//
// function coin (){
//
//   let front = heads
//   let back = tails
//
// }
//
// document.querySelector("#heads").value = "heads"

// console.log(document.querySelector("#heads").value)
//
//  function flippy(heads, tails) {
//   let result = Math.ceil(Math.random() * Math.ceil(2))
//   console.log(result)
//     if (result === 1){
//       document.querySelector("img").src = "https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_1280.png"
//       return "heads"
//     }
//     else {
//       document.querySelector("img").src = "https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_1280.png"
//       return "tails"
//     }
// }


document.querySelector("#heads").addEventListener("click", function (){

  flippy()

  function flippy(heads, tails) {
   let result = Math.ceil(Math.random() * Math.ceil(2))
   console.log(result)
     if (result === 1){

       document.querySelector("p").innerHTML = "You Win"
       document.querySelector("img").src = "images/maxresdefault.jpg"

       // return "heads"

     }
     else {
       document.querySelector("img").src = "images/images.png"
      document.querySelector("p").innerHTML = "You Lose"
       //return "tails"
     }
  }

})



document.querySelector("#tails").addEventListener("click", function (){

  flippy()

  function flippy(heads, tails) {
   let result = Math.ceil(Math.random() * Math.ceil(2))
   console.log(result)
     if (result === 1){

       document.querySelector("p").innerHTML = "You lose"
       document.querySelector("img").src = "images/maxresdefault.jpg"

       // return "heads"

     }
     else {
       document.querySelector("img").src = "images/images.png"
      document.querySelector("p").innerHTML = "You Win"
       //return "tails"
     }
  }

})


  // function flippy(heads, tails) {
  //  let result = Math.ceil(Math.random() * Math.ceil(2))
  //  console.log(result)
  //    if (result === 1){
  //      document.querySelector("img").src = "https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_1280.png"
  //      document.querySelector("p").innerHTMl = "You Win"
  //      return "heads"
  //
  //    }
  //    else {
  //      document.querySelector("img").src = "https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_1280.png"
  //     document.querySelector("img").innerHTML = "You Lose"
  //      return "tails"
  //    }
  // }

// class Coin {
//   constructor(heads, tails){
//     this.heads = heads
//     this.tails = tails
//
//   }
// }

// Literal Notation

// let coiny = {
//   "head": "head",
//   "tails": "tails",
//   "flip": function (){
//     Math.ceil(Math.random() * Math.ceil(2))
//   }
// }
