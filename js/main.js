//Client side logic
document.querySelector('#heads').addEventListener('click',makeReqHeads)
document.querySelector('#tails').addEventListener('click',makeReqTails)

function makeReqHeads(){
    const heads = document.querySelector('#heads').innerHTML.toLowerCase()
    fetch(`/api?flip=${heads}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        document.querySelector("#answer").innerText = data.result
        })
      .catch (err => {
        console.log(`Error ${err}`)
        })
}
function makeReqTails(){
    const tails = document.querySelector('#tails').innerHTML.toLowerCase()
    fetch(`/api?flip=${tails}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        document.querySelector("#answer").innerText =  data.result
        })
      .catch (err => {
        console.log(`Error ${err}`)
        })
}