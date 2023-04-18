let btn = document.querySelector('#clickMe'); 
let input = document.querySelector('#coin').value;  
// let coin = document.querySelector('#coinChoice'); 
// let winner = document.querySelector('#winner'); 
// let title = document.querySelector('h1'); 



document.querySelector('#clickMe').addEventListener('click', flipCoin)

function flipCoin(){

 

  fetch(`/api?student=${input}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#coinChoice").innerText = data.coinChoice
      document.querySelector("#winner").innerText = data.winner
     
    });

}

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
