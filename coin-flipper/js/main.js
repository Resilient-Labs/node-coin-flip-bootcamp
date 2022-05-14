/*
click flip - choose heads or tails 
  Two buttons in HTML
  Two eventlisteners

  set the value, it's the value the coin landed on

logic to generate a random flip, heads or tails, if heads show heads in results, if tails show tails in results 

compare results with flipper, figure out if you won or lost

If won add to the win score, if lose add to the lost score

reset game button
*/

  const results = document.querySelector('#flippedResult')
  const flipped = document.querySelector('#flipped')

  document.querySelectorAll('button').forEach(item => {
  item.addEventListener('click', event => {
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.value)

    const choice = event.target.value
    const flippedCoin = Math.floor(Math.random() * 2)
    const score = flipped.innerText = `You chose: ${choice}`

    console.log(choice)
    console.log(flippedCoin)

    if( flippedCoin === 0 && choice === 'tails') {
        results.innerText = 'Heads! Your Wrong!'
    } else if ( flippedCoin === 1 && choice === 'heads') {
        results.innerText = 'Tails! Nope!'
    } else if ( flippedCoin === 0 && choice === 'heads') {     
        results.innerText = 'Heads! Right On!'
    } else if ( flippedCoin === 1 && choice === 'tails') {       
        results.innerText = 'Tails! Nice!'
    }
  })
})