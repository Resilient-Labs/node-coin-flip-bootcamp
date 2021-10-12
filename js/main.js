let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin")
let flipRuby = document.querySelector("#flip-Ruby")
let coinFlipGuess = true

let flipSaphire = document.querySelector("#flip-Saphire")
let resetButton = document.querySelector("#reset-button")

flipRuby.addEventListener("click", () =>{

    coinFlipGuess = true
    // let i = Math.floor(Math.random() * 2);
    fetch(`/api?findgem=${coinFlipGuess}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data.i)
        coin.style.animation = "none";
        if(data.i){
            setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards"
            }, 100)
            heads +=1;
            console.log()
        } else{
            setTimeout(function(){
                coin.style.animation = "spin-tails 3s forwards"
                }, 100)
            tails +=1

        }
        setTimeout(updateStats, 3000)
    
    });

})

flipSaphire.addEventListener("click", () =>{
    
    coinFlipGuess = false
    fetch(`/api?findgem=${coinFlipGuess}`)
    .then(response => response.json())
    .then((data) => {
    // let i = Math.floor(Math.random() * 2);
        coin.style.animation = "none";
        if(data.i){
            console.log(data.i)
            setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards"
            }, 100)

            heads +=1;
            
        } else{
            setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards"
            }, 100)
        
            tails +=1;

        }
        setTimeout(updateStats, 3000)
    })
})


function updateStats(){
    document.querySelector('#heads-count').innerHTML = `Ruby: ${heads}`;
    document.querySelector('#tails-count').innerHTML = `Saphire: ${tails}`;
}

function disableButton(){
    flipButton.disabled = true;
    setTimeout(function(){
        flipButton.disabled = false;
    }, 3000);
}
function resetGame (){
    document.querySelector('#heads-count').innerHTML = 'Ruby: 0';
    document.querySelector('#tails-count').innerHTML = 'Saphire: 0';
}
resetButton.addEventListener('click', resetGame)


// let gems = document.querySelectorAll(".gems");
// for (let i = 0; i < gems.length; i++) {
//     gems[i].addEventListener("click", function () {
//         console.log('gems')

       
//             if(flipSaphire.clicked === true){
//             console.log('byeee')
//             alert("button was clicked");
            
//         }
//     });


// }