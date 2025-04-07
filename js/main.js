document.getElementById('flip').addEventListener('click', flipCoin)

function flipCoin(){

    const decision = document.getElementById("headsOrTails").value

fetch(`/api?decision=${decision}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        document.getElementById('result').textContent = `Result: ${data.result}`
        document.getElementById('msg').textContent = data.msg

    })
}
