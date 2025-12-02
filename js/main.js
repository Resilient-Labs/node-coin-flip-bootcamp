const buttons = document.querySelectorAll('button')
Array.from(buttons).forEach(button => button.addEventListener('click',flipACoin))

function flipACoin(click){
  const guess = Number(click.target.value)
  fetch('/coinflip')
    .then(res => res.json())
    .then(data => {
      const coin = document.querySelector('#coin')
      coin.classList.remove('once')
      coin.classList.remove('twice')
      setTimeout(()=> {
        if (data.result === 1){
          coin.classList.add('once')
          
          console.log('once,red')
        } else {
          coin.classList.add('twice')
          
          console.log('twice,grey')
        }
        
      },100)
      setTimeout( () => {
        if (data.result === guess){
          document.querySelector('#coinResult').innerText = 'You guessed right. Great Job!'
        } else {
          document.querySelector('#coinResult').innerText = 'Better luck next time...'
        }
      },3100) 
      
    })
}