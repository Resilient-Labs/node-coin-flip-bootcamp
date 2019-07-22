// let count = 0;
// let sucreHead = "Head"
// let sucreTail = "Tail"
// let run;
//
// //change to button itself, value. (#button1(chooseSide), randomValue)
//
// document.querySelector('#button1').addEventListener('click', ()=>{
//   console.log('test')
//   randomValue = getHeadOrTail()
//   determineWinner("heads",randomValue)
// })
//
// //how to do the same thing using querySelectorAll ?
//
// document.querySelector('#button2').addEventListener('click', ()=>{
//   console.log('test')
//   randomValue = getHeadOrTail()
//   determineWinner("tails",randomValue)
// })
//
// //command + shift + f = renaming within entire project
//
// function getHeadOrTail(){
//   let result = Math.random()
//   if (result <= 0.5){
//     console.log(result)
//     document.querySelector('img').src = "images/sucreHead.png"
//     return "heads"
//   }else {
//     console.log(result)
//     document.querySelector('img').src = "images/sucreTail.png"
//     return "tails"
//   }
// }
//
// function determineWinner(chooseSide,randomSide){
//   if (chooseSide === randomSide){
//     document.querySelector('span').innerHTML = "You won!"
//   }
//   else{
//     document.querySelector('span').innerHTML = "You lost!"
//   }
// }
//
// //Animation to flip the coin on click
// // function spin(){
// //   let coin = document.querySelector('img')
// //     coin.addEventListener('click', ()=>{
// //     coin.style.transform = "rotateY(" + 300 + "deg)";
// //   })
// // }
