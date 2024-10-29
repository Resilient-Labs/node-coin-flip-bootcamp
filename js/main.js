// document.querySelector('#clickMe').addEventListener('click', coinFlip)
document.querySelector("#clickMe").addEventListener("click", coinFlip);

function coinFlip() {
  const userInput = document.querySelector("#input").value;

  document.querySelector("#userPicked").textContent =
    "You Picked: " + userInput;
  fetch(`/api?userInput=${userInput}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#serverPicked").textContent =
        "Server Picked: " + data.flip;
      document.querySelector("#results").textContent =
        userInput === data.flip
          ? "Nice! You and the Server Picked The Same Side of Coin!"
          : `The Server Picked ${data.flip}. You Lose`; //I am asking if its equal, the colon means else assign to this '' instead
    });
}

// let result
// let randomNum = Math.random();
// if (randomNum < 0.5) {
//     result = "Heads";
// } else {
//     result = "Tails";
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
