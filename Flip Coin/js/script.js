

// to randomize coin five times
let randomize= Math.floor(Math.random() * 1);
let buttonHead = document.getElementById('buttonHead')
let buttonTail = document.getElementById('buttonTail')
let results = document.getElementById('results')
let imagId = document.getElementById('imagId');
let headImage = './image/head.png'
let tailImage = './image/tail.png'


//
// let button = document.getElementById('buttonFlip')
buttonHead.addEventListener('click',head)
buttonTail.addEventListener('click',tail)

function changeResult(x)
{

   if (x === "head"){
     results.innerHTML = "head"
     imagId.src= headImage;
   }
   else if (x === "tail"){
     results.innerHTML = "tail";
     imagId.src= tailImage;

   }
   else {
     results.innerHTML = "tail";

   }
}


function head()
{
  fetch (`/api`)
  .then( response => response.json())
  .then(data => {
        changeResult(data.result)
  })
}

function tail()
{
   console.log("working in tail");
   fetch (`/api`)
   .then( response => response.json())
   .then(data => {
    changeResult(data.result)
   })

}
