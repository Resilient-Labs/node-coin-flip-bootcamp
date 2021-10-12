document.querySelector("#button").addEventListener('click', tossCoin)
let picsource = document.getElementById("flipMe")

function tossCoin(){
    let pic = new Array("coinfront.png", "coinback.png");
    let randompics = Math.floor(Math.random() * pic.length);
    picsource.src = pic[randompics];
}