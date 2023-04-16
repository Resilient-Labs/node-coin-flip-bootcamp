const headsButton = document.getElementById("pressHeads");
const tailsButton = document.getElementById("pressTails");
const result = document.getElementById("result");

headsButton.addEventListener("click", function() {
    flipCoin("heads");
});

tailsButton.addEventListener("click", function() {
    flipCoin("tails");
}); 
 
function flipCoin(choose) {
   


fetch(`/api?coinFlip=${choose}`)
.then(res => res.json())
.then(data => {
   
    console.log(data)
    document.querySelector('#result').innerHTML = "result:" + data.result 
    document.querySelector('#botsPick').innerHTML = "botsPick:" + data.botsPick
    document.querySelector('#userPick').innerHTML = "userPick:" + data.userPick


})
.catch(err => {
    console.log(`error ${err}`);
});

} 




