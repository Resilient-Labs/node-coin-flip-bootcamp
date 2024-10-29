document.querySelector('#clickMe').addEventListener('click', flipCoin)

function flipCoin() {
fetch(`/flip`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.side);

      document.querySelector("#sideName").innerText = data.side
    });

  }















// const heads = document.querySelector("#heads").value;
// const tails = document.querySelector("#tails").value;

// let random = Math.random();
// let result = random

// function callServer(){

//   fetch(`/flip?coin=${heads}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);

//       document.querySelector("#sideName").textContent = data.name
//     });

// }





// FRONT-END VERSION: FRONT-END PART (1/2)
// function flipCoin() { // I want you to randomly add or minus the bet

//   // const heads = document.querySelector("#heads").value;
//   // const tails = document.querySelector("#tails").value;

//   let image = document.querySelector("img[src='css/Heads.png']")

//   let result = Math.random();

//   if(result < .444){
//     result = "heads"
//     console.log(result)

//     // coin=[object%20HTMLImageElement] -- I removed the image id in the HTML and added quotes to the heads in fetch(`/flip?coin=${'heads'}`)
//     fetch(`/flip?coin=${'heads'}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       console.log(data.side);

//       document.querySelector("#sideName").innerText = data.side
//     });

//     console.log(result)
//     return result
//   } 
  
//   else { 
//   result = "tails"
//   console.log(result)
//   image.src = "css/Tails.png"; // TypeError: null is not an object (evaluating 'image.src = "css/Tails.png"')

//   fetch(`/flip?coin=${'tails'}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       console.log(data.side);

//       document.querySelector("#sideName").innerText = data.side
//     });

//     console.log(result)
//     return result
//   }
// END OF FRONT-END VERSION
  





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
