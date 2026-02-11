document.querySelector('#clickMe').addEventListener('click', makeReq)
document.querySelector('#reset').addEventListener('click', reset)

let player2Type = 0
let player2Score = 0
let image = document.querySelector('img')
let input1 = document.querySelector('#userName[type="text"]')
let input2 = document.querySelector('#userName2[type="text"]')

function makeReq() {
  const userName = document.querySelector("#userName").value;
  const userName1 = document.querySelector("#userName2").value;
  const result = document.querySelector('h3')
  image.classList.add('hidden')
  if (userName && userName1) {
    fetch(`/api?p1=${userName}&p2=${userName1}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        const name1 = data.obj1.name
        const player1Type = data.obj1.status
        const player1Score = data.obj1.score

        const name2 = data.obj2.name
        player2Type = data.obj2.status
        player2Score = data.obj2.score

        document.querySelector("#personName").textContent = `Player 1: ${name1.toUpperCase()}(${player1Type}) Score: ${player1Score}`

        document.querySelector("#personName1").textContent = `Player 2: ${name2.toUpperCase()}(${player2Type}) Score: ${player2Score}`
        image.src = '/img/heads.jpg'

        userName.value = ''
        userName1.value = ''
        if (data.coinResult === 'heads') {
          image.src = '/img/heads.jpg'
          image.classList.remove('hidden')
        } else if (data.coinResult === 'tails') {
          image.src = '/img/tails.jpg'
          image.classList.remove('hidden')
        }

        if (data.obj1.winStatus) {
          document.querySelector('p').innerText = `The winner is: ${name1}`
          reset()
          document.querySelector('#clickMe').removeEventListener('click', makeReq)
        } else if (data.obj2.winStatus) {
          document.querySelector('p').innerText = `The winner is: ${name2}`
          reset()
          document.querySelector('#clickMe').removeEventListener('click', makeReq)
        }
      });
  } else {
    document.querySelector('p').innerText = `Cannot begin until all users have created a name.`
  }

}
function reset() {
  player2Type = 0
  player2Score = 0
  document.querySelector("#personName").textContent = ``
  document.querySelector("#personOccupation").textContent = ``

  document.querySelector("#personName1").textContent = ``
  document.querySelector("#personOccupation1").textContent = ``
  image.src = ``
  input1 = ''
  input2 = ''
}
