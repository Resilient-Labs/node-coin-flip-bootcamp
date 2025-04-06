document.querySelector('button').addEventListener('click', getFlip);


function getFlip() {
  fetch('/flip')
    .then(res => res.json())
    .then(data => {
      document.querySelector('section.coin').innerHTML = `<img src="img/${data.flip}.png" alt="${data.flip}" />`;
    })
    .catch(err => {
      console.log(err);
    })
}