//Assisted by Rodas Ghidei

/*********************
Server Fetch Requests
**********************/
document.querySelector('#heads').addEventListener('click', pick)
document.querySelector('#tails').addEventListener('click', pick)
function pick(element){
  let htmlElement = element.currentTarget
  let pick = element.currentTarget.id
  let coin = document.querySelector('.coin')
  coin.style.animation = 'bounce 1.3s'
  let headsSide = coin.querySelector('.heads')
  let tailsSide = coin.querySelector('.tails')
  let buttons = document.querySelectorAll('#menu button')
  buttons.forEach((item, i) => {
    item.disabled = true
  });
  console.log(`I pick ${pick}`)

  fetch(`/api?pick=${pick}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      let result = data.isHeads ? 'heads' : 'tails'
      console.log(result)

      document.querySelector('#prompt').innerText = pick === result ? 'Winner' : 'Better Luck Next Time...'
      if(result==='heads' && coin.classList.contains('heads-up')){
        headsSide.style.animation = 'faceup-360 1.3s linear both'
        tailsSide.style.animation = 'facedown-360 1.3s linear both'
      } else if (result==='heads' && coin.classList.contains('heads-up')===false) {
        headsSide.style.animation = 'facedown-180 1.3s linear both'
        tailsSide.style.animation = 'faceup-180 1.3s linear both'
      } else if (result==='tails' && coin.classList.contains('heads-up')){
        headsSide.style.animation = 'faceup-180 1.3s linear both'
        tailsSide.style.animation = 'facedown-180 1.3s linear both'
      } else if (result==='tails' && coin.classList.contains('heads-up')===false){
        headsSide.style.animation = 'facedown-360 1.3s linear both'
        tailsSide.style.animation = 'faceup-360 1.3s linear both'
      }
      // pick === result ? coin.classList.add(`animate-flip-360`) : coin.classList.add(`animate-flip-180`)

      setTimeout(_=>{
        data.isHeads ? coin.classList.add('heads-up') : coin.classList.remove('heads-up')
        headsSide.style.animation = ''
        tailsSide.style.animation = ''
        let buttons = document.querySelectorAll('#menu button')
        buttons.forEach((item, i) => {
          item.disabled = false
        });
      },1300)
      setTimeout(function(){coin.style.animation =''}, 1300)
      // setTimeout(_=>,1200)

    })

}

/**Aside panel functionality**/
// document.querySelector('.info-button').addEventListener('click', toggleAside)
// document.querySelector('#hide-aside').addEventListener('click', toggleAside)
//
// function toggleAside(){       document.querySelector('aside').classList.toggle('reveal')
// }
/**Aside Panel end*/
