document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userName = document.querySelector('input[name="coinGame"]:checked').value;

  fetch(`/api?student=${userName}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#playersChoice").textContent = data.playersChoice
      document.querySelector("#cpuChoice").textContent = data.cpuChoice
      document.querySelector("#winOrLose").textContent = data.winOrLose
    });

}

// document.querySelector('#clickMe').addEventListener('click', headOrTails )

// function getResult(){

//   if(Math.random() < .5){
//     return 'heads'

//   } else {
//     return 'tails'
//   }

// }
 

// function headOrTails(e){
//   e.preventDefault()
//   let heads = document.querySelector('#head').value
//   let tails = document.querySelector('#tails').value
//   if(heads === getResult() || tails === getResult()){
//     document.querySelector('h2').innerText = 'Congrats !! You Won!!!'
//   } else{
//     document.querySelector('h2').innerText = 'Damn!! You took a L!!!'
//   }
  
  



