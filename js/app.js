  const heads = document.querySelector('.heads');
  const tails = document.querySelector('.tails');
  const showResult = document.querySelector('.coinTossResult')
  const coin = document.querySelector('.coin')
  const coinText = document.querySelector('.coinText')
  

  function coinflip() {
    var winnerResult = Math.floor((Math.random()*2)+1)
    if (winnerResult === 1){
      coin.classList.add('flip')
      setTimeout(function() {coinText.innerHTML = "HEADS"}, 1500)
      setTimeout(function() {showResult.innerHTML = "YOU GOT HEADS"}, 1500);
      setTimeout(function(){ coin.classList.remove('flip') }, 1000);
      console.log(coin)
    }else if (winnerResult === 2){
      coin.classList.add('flip')
      setTimeout(function() {coinText.innerHTML = "TAILS"}, 1500)
      setTimeout(function() {showResult.innerHTML = "YOU GOT TAILS"}, 1500);
      setTimeout(function(){coin.classList.remove('flip') }, 1000);
      console.log(coin)
    }
  }

  heads.addEventListener('click',()=>{
    coinflip();
  });

  tails.addEventListener('click',()=>{
    coinflip();
  });
