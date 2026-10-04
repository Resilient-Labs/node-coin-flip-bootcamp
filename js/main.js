document.querySelector('#heads').addEventListener('click',flipCoin)

document.querySelector('#tails').addEventListener('click',flipCoin)

async function flipCoin(e){
      // once coin had been clicked it must be either H or T
      const choice = e.target
      const result = await fetch(`/flip?q=${choice.id}`)
      const res = await result.text()
      document.querySelector('h2').innerText = res
      console.log(res)
}