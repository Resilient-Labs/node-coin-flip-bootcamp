let btn = document.querySelector('button')
let result = document.querySelector('h2')

btn.addEventListener('click', flipCoin)

function flipCoin(){
  
    fetch(`/api`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        result.innerText = data
      });
  
  }