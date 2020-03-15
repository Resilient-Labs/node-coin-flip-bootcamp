let heads = document.getElementById('heads')
let tails = document.getElementById('tails')

heads.addEventListener('click',() =>{
fetch('/calculateWinnerHeads')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  let display =  document.querySelector('p')
  if(data.winner === true){
  document.getElementById('displayCoin').src = "front.jpg"
   display.innerHTML = "You Won"

  }else{
    // display.innerHTML = "sad"
    document.getElementById('displayCoin').src = "back.png"
    
    display.innerHTML = data.lost
    // console.log(data.lost)
  }
  });

  })
tails.addEventListener('click',() =>{
  fetch('/calculateWinnerTails')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      let display =  document.querySelector('p')
      if(data.winner === true){
        document.getElementById('displayCoin').src = "back.png"
        display.innerHTML = "You Won"
      }else{
        document.getElementById('displayCoin').src = "front.jpg"
        display.innerHTML = data.lost
      }
    });

    })


// document.querySelector('#clickMe').addEventListener('click', makeReq)
//
// function makeReq(){
//
//   const userName = document.querySelector("#userName").value;
//
//   fetch(`/api?student=${userName}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector("#personName").textContent = data.name
//       document.querySelector("#personStatus").textContent = data.status
//       document.querySelector("#personOccupation").textContent = data.currentOccupation
//     });
//
// }

// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
// }
