//function coin(){
//  return Math.random < .5 ? "heads" : "tails"
//}
//const flip = e =>{
 // e.preventDefault();

 // const heads = document.getElementById('inHead').value
 // const tails = document.getElementById('inTail').value
 // if(heads === coin() || tails === coin()){
 //   document.querySelector('h2').innerText = "you win";
 // } else {
   // document.querySelector('h2').innerText = "you loser";
 // }
//}

//make a function name makereq
// make a varible from the input
//sen an api request to the server with username input
// when the promise is made parse it as json
// when we get the data from the server put it as a text content 

function makeReq(){
  const userName = document.querySelector('#userName').value;
  fetch(`/api?student=${userName}`)
  .then(response => response.json())
  .then((data) =>{ 
    console.log(data)
    document.querySelector('#playerChoice').textContent = `Player's choice: ${data.playerChoice}`
    document.querySelector('#cpuChoice').textContent = `Bot's choice: ${data.cpuChoice}`
  
    document.querySelector('#winOrLose').textContent = `You just ${data.winOrLose}`

  })
}
document.querySelector("button").addEventListener('click', makeReq)
// call the function with an addeventlistener 