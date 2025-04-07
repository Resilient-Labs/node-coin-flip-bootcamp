document.querySelector('#heads').addEventListener('click', makeHeadsReq);
document.querySelector('#tails').addEventListener('click', makeTailsReq);

function makeHeadsReq(){

  // const userName = document.querySelector("#userName").value;

  fetch(`/api?flip=heads`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // document.querySelector("#personName").textContent = data.name
      // document.querySelector("#personStatus").textContent = data.status
      // document.querySelector("#personOccupation").textContent = data.currentOccupation
      document.querySelector("#humanNameWinLose").textContent = data.name;
      document.querySelector("#headsOrTails").textContent = data.status;
      // document.querySelector("#humanChoice").textContent = data.humanPlayerChoice;
      document.querySelector("#coinFlipResult").textContent = data.flipResult;
      // document.querySelector("#personOccupation").textContent = data.currentOccupation
    });
}

function makeTailsReq(){

  // const userName = document.querySelector("#userName").value;

  fetch(`/api?flip=tails`)
    .then(response => response.json()) //objToJSON variable gets parsed that was initially stringified
    .then((data) => {
      console.log(data);
      // document.querySelector("#personName").textContent = data.name
      // document.querySelector("#personStatus").textContent = data.status
      // document.querySelector("#personOccupation").textContent = data.currentOccupation
      document.querySelector("#humanNameWinLose").textContent = data.name
      document.querySelector("#headsOrTails").textContent = data.status
      // document.querySelector("#humanChoice").textContent = data.humanPlayerChoice;
      document.querySelector("#coinFlipResult").textContent = data.flipResult;
      // document.querySelector("#personOccupation").textContent = data.currentOccupation
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
