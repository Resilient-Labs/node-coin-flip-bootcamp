document.querySelector('#click').onclick = click;
document.querySelector('#blick').onclick = click;

var heads = 0;
var tails = 0;
function click() {
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
    	flip("Heads");
    }else{
        flip("Tails");
    }
};
function flip(coin) {
    document.getElementById("result").innerHTML = coin;
};
