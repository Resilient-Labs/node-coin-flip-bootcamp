 
const text =  document.querySelector('h2')
const heads = document.querySelector('.coin-heads')
const tails = document.querySelector('.coin-tails')

document.querySelectorAll('button').forEach(e => e.addEventListener('click', makeReq))


function makeReq(e){
  const choice = e.target.id
  fetch(`/api?coin=${choice}`)
    .then(response => response.json())
    .then((data) => {
      text.textContent = ''
      heads.firstElementChild.src =  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/US_One_Cent_Obv.png/240px-US_One_Cent_Obv.png'
      tails.firstElementChild.src =  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/US_One_Cent_Rev.png/240px-US_One_Cent_Rev.png'
      heads.style.animation = data.headsAnimation
      tails.style.animation = data.tailsAnimation
      stopAnimation(data)
    });
}

function stopAnimation(data){
  setTimeout(()=>{
    heads.style.animation = 'none'    
    tails.style.animation = 'none'
    text.textContent = data.userFlip
    document.querySelectorAll('img').forEach(e => e.src =  data.image )
  }, 3000)
}


