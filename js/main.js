document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq() {
  fetch('/api?heads=1')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log(data);
      document.querySelector("#headsOrTails").textContent = data.name;
    })
    .catch(error => {
      console.error('Error:', error);
      document.querySelector("#headsOrTails").textContent = 'Error occurred. Please try again.';
    });
}

// function makeReq() {
//   fetch('/api?heads=1') // Send the request to the /api endpoint with heads parameter set to 1
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector("#headsOrTails").textContent = data.name; // Update H2
//     });
// }

  // math.random generates random decimal between 0 to 1
  // * 2 to generate from 0 to 2
  // math.floor will round the number down between 0 and 1
  // let randomInt = Math.floor(math.random() * 2) + 1 

  // initialize a variable to store result
  // if randomInt is 1, heads
  // if not it is tails
  // let result = (randomInt === 1) ? "heads" : "tails"

//   let result;
// if (randomNumber === 0) {
//     result = "Heads"
// } else {
//     result = "Tails"
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
