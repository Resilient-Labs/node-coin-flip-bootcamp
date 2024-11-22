document.querySelector("#button").addEventListener('click', tossCoin)
let picsource = document.getElementById("flipMe")

function tossCoin(){
    let pic = new Array("https://i.imgur.com/d0Wiv32.png", "https://i.imgur.com/vwHTlIQ.png");
    let randompics = Math.floor(Math.random() * pic.length);
    picsource.src = pic[randompics];
}