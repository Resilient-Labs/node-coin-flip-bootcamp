var coin = document.getElementById("coin");
var button = document.getElementById("button");
var result = document.getElementById("result");
var headCount=document.getElementById("headCount");
var tailsCount = document.getElementById("tailsCount");
var imageCoin = document.getElementById("imageCoin");
var heads = 0;
var tails = 0;

/* On click of button spin coin ainamtion */
function coinToss() {
  /* Random number 0 or 1  */
  var x = Math.floor(Math.random() * 2);
  /* If x = 0 then change coin html to 
  //image of heads along with 
  animation for flipping effect */
  if (x === 0) {
    coin.innerHTML = '<img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/US_One_Cent_Obv.png/800px-US_One_Cent_Obv.png"/>';
    /* Heads count increase by 1 */
    heads += 1;
    /* Display result of cointoss */
    result.innerHTML = '<h2>YOU GOT HEADS!</h2>';
    /* Display number of heads */
    headCount.innerHTML = '<h2>Number of heads:<span> ' + heads+'</span></h2>';
    /* Else x =  change coin html to image of tails along with animation for flipping effect */
  } else {
    coin.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/US_One_Cent_Rev.png/800px-US_One_Cent_Rev.png"/>';
    tails += 1;
    /* Display result of flip */
    result.innerHTML = '<h2>YOU GOT TAILS!</h2>';
    /* Display number of tails */
    tailsCount.innerHTML = '<h2> Number of tails:<span> ' + tails + '</span></h2>';

  }

}
/* Add the coin toss function to the button using on click */
button.onclick = function() {
  coinToss();
  imageCoin.remove();
}