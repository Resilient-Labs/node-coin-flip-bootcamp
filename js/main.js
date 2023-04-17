let flip1 = document.querySelector('#tails')
flip1.addEventListener('click', makeReq)
let flip2 = document.querySelector('#heads')
flip2.addEventListener('click', makeReq)

function makeReq(e){

  fetch('/api')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      if (data.result == 'tails' && e.target == flip1){
        result.innerText = 'You Win'
      }else if(data.result == 'heads' && e.target == flip2){
        result.innerText = 'You Win'
      }else{
        result.innerText = 'You Lose'
      }
      
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
