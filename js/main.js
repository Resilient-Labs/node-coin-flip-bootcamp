const buttons = document.querySelectorAll('.clickMe')
const twoButtons = Array.from(buttons,(twoPiece)=>{
  twoPiece.addEventListener('click', makeReq)
})

let result = document.getElementById('results')

function makeReq(){

  

  fetch('/api')
    .then(response => response.text())
    .then((data) => {
      console.log(data);
      
      result.textContent = data
     
    });

}

