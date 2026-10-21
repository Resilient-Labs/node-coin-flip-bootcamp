document.querySelector('#clickMe').addEventListener('click', subCoin)

function subCoin(){

  const coinInput = document.querySelector("#coinInput").value.toLowerCase();

  fetch(`/api?coinFlip=${coinInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#winOrLose").textContent = `You picked: "${data.yourChoice}"`
      document.querySelector("#ProbablityCalulatorApi").textContent = `The side came: "${data.flipResult}"`
      document.querySelector("#winOrLoseMessage").textContent = `You ${data.winOrLoseMessage}`
    });
}

// document.getElementById("clickMe").onclick = makeReq;

// function makeReq(){

//   var userName = document.getElementById("userName").value;

//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);

//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation

//       } else {
//         // We reached our target server, but it returned an error
//         console.log("Server Returned Error !!!")

//       }
//     };

//     request.onerror = function() {
//       // There was a connection error of some sort
//       console.log("Connection Error !!!")
      
//     };

//     request.send();
// }
