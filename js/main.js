document.querySelector('#heads').addEventListener('click', makeReq)
document.querySelector('#tails').addEventListener('click', makeReq)

function makeReq(click) {
    fetch(`/api?choice=${click.target.id}`)
        .then(res => res.json())
        .then(data => {

            console.log(data)
            document.querySelector('h2').innerHTML = data.outcome
            document.querySelector('h3').innerHTML = `${'The coin landed on: ' + data.computer}`
        }
        )
        .catch(err => console.error("Error:", err))
};
