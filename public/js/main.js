document.querySelector('#flip-button').addEventListener('click', makeReq)
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let heads = 0;
let tails = 0;
let i = Math.floor(Math.random() * 2);




function makeReq(){
    const userName = document.querySelector("#userName").value;
    coin.style.animation = "none";
    
  fetch(`/api?student=${userName}`)
    .then(response => response.json())
    .then((data) => {
        console.log(userName);
        document.querySelector("#personName").textContent = data.result;
        if(data.result == 'winner' && userName == 'heads' || data.result == 'loser' && userName == 'tails') {
            setTimeout(function() {
                coin.style.animation = 'spin-heads 1s forwards';
            }, 100);
            heads++;
        } 
        else{
            setTimeout(function() {
                coin.style.animation = 'spin-tails 1s forwards'
            }, 100);
            tails++
        }
        setTimeout(updateStats, 1000);
        disableButton();
    });
}

function updateStats() {
    document.querySelector('.heads-count').textContent = `Heads: ${heads}`;
    document.querySelector('.tails-count').textContent = `Tails: ${tails}`;
}
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    }, 1000);
}
resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
    });