document.querySelector('button').addEventListener('click',flipIt);


function flipIt(){

   fetch('/api')
    .then(response => response.text())
    .then((data) => {
      console.log(data);
document.querySelector('h2').innerText = data;
     })
.catch(error => console.error('Error:', error));
}


