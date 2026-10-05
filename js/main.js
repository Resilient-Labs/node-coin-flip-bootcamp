document.querySelector('#heads').addEventListener('click', flipCoin)

document.querySelector('#tails').addEventListener('click', flipCoin)


async function flipCoin(e) {
    //coin must land on one side after being clicked
    const choice = e.target
    const result = await fetch(`/flip?q=${choice.id}`)
    const res = await result.text()
    document.querySelector('h2').innerText = res

}