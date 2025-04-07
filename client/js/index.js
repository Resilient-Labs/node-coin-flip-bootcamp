document.addEventListener('DOMContentLoaded', headOrtails);
let tailsScore = document.getElementById("tails");
let tailValue = 0;
let headValue = 0;
let headsScore = document.getElementById('heads');
async function headOrtails() {
    const coin = document.getElementById('coin');
  
    coin.addEventListener('click', function() {
      const flipResult = Math.random();
      coin.className = ''; // Remove all existing classes
  
      setTimeout(function() {
        if (flipResult <= 0.5) {
            headValue ++;
            coin.classList.add('heads');
            headsScore.innerHTML = headValue;
        } else {
            tailValue ++;
            tailsScore.innerHTML = tailValue;
            coin.classList.add('tails');
        }
      }, 100);
    });
}
