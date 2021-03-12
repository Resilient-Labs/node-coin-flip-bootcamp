/*********************
Server Fetch Requests
**********************/
document.querySelector('#heads').addEventListener('click', pick)
document.querySelector('#tails').addEventListener('click', pick)
function pick(element){
  let htmlElement = element.currentTarget
  let pick = element.currentTarget.id

  fetch(`/api?pick=${pick}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      let result = data.isHeads ? 'heads' : 'tails'
      console.log(result)
      coin = document.querySelector('.coin')
      document.querySelector('#prompt').innerText = htmlElement.id === result ? 'Winner' : 'Better Luck Next Time...'

      htmlElement.id === result ? coin.classList.add(`animate-flip-360`) : coin.classList.add(`animate-flip-180`)

      setTimeout(_=>coin.classList.remove(`animate-flip-360`),1200)
      setTimeout(_=>coin.classList.remove(`animate-flip-180`),1200)
      data.isHeads ? coin.classList.add('heads-up') : coin.classList.remove('heads-up')
    })

}

/**Aside panel functionality**/
// document.querySelector('.info-button').addEventListener('click', toggleAside)
// document.querySelector('#hide-aside').addEventListener('click', toggleAside)
//
// function toggleAside(){       document.querySelector('aside').classList.toggle('reveal')
// }
/**Aside Panel end*/
