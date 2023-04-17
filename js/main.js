document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userName = document.querySelector("#userName").value;

  fetch(`/api?student=${userName}`)         // change student name to coin side 
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#personName").textContent = data.name   // change to users choice 
      document.querySelector("#personStatus").textContent = data.status // change to computer choice 
      document.querySelector("#personOccupation").textContent = data.currentOccupation // what the result was 
    });

}











//********************************legacy lines of code ******************************************************** */
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

//       }
//     };

//     request.onerror = function() {
//       // There was a connection error of some sort
//     };

//     request.send();
// }
