document.querySelector('#clickMe').addEventListener('click', makeReq)
let score = 0 


function makeReq(){

  let value = document.querySelector('input').value
  value = value.toLowerCase().trim()

if (value === 'heads' || value === 'tails'){
  fetch(`http://localhost:8000/api/coin-flip`)
    .then(response => response.json())
    .then((data) => {

      document.querySelector('h2').textContent = `You flipped ${data.result}`

      if (value === data.result){
        score ++ 
        document.querySelector('h3').textContent = `You guessed correctly!`
        document.querySelector('h4').textContent = `Score: ${score}`
        setTimeout(()=> {
          document.querySelector('h2').textContent = ''
          document.querySelector('h3').textContent = ''
      }, 3000)
      }
    });
  } else{
    alert('Please enter a valid input')
  }

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
