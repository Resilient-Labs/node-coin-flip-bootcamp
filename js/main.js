function coin() {
 const input = document.querySelector('#player').value

 fetch(`/api?side=${input}`)
 .then(response => response.json())
 .then ((data) => {
  console.log(data);
  document.querySelector('#results').textContent = data.side
 })

}

document.querySelector('#clickMe').addEventListener('click', coin);

//   return Math.random() < 0.5 ? "Heads" : "Tails";
// }

// const flip = e => {
//   e.preventDefault();
//   const heads = document.getElementById('heads').value;
//   const tails = document.getElementById('tails').value;
//   if (heads === coin() || tails === coin()) {
//     document.querySelector('h2').innerText = "You Win";
//   } else {
//     document.querySelector('h2').innerText = "You Lose";
//   }