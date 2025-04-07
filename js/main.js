document.querySelector('#betHeads').addEventListener('click', placeBetHeads)
document.querySelector('#betTails').addEventListener('click', placeBetTails)

function placeBetHeads(){

  fetch(`/api?flipResult=heads`)
    .then(response => response.json())
    .then((headsData) => {
      console.log(headsData);
      
      document.querySelector("#betChoice").textContent = headsData.status
      // document.querySelector("#winOrLose").textContent = headsData.winnerOrLoser
    });
}

function placeBetTails(){
  
    fetch(`/api?flipResult=tails`)
      .then(response => response.json())
      .then((tailsData) => {
        console.log(tailsData);

        document.querySelector("#betChoice").textContent = tailsData.status
        // document.querySelector("#winOrLose").textContent = tailsData.winnerOrLoser
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
