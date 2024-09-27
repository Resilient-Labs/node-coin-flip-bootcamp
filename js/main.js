document.getElementById("headsBtn").addEventListener('click', function(){
console.log("heads button clicked")
fetch(`/api?answer=${"heads"}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      if (data.check == true) {
      document.getElementById("result").innerHTML = "You guessed correctly!";
      document.getElementById("coin").src='https://i.ebayimg.com/images/g/xtcAAOSwLwBaZigS/s-l400.jpg';
      }
      else { 
      document.getElementById("result").innerHTML = "You guessed incorrectly!";
      document.getElementById("coin").src="https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_SY580_.jpg";
      }
    });
   
})
document.getElementById("tailsBtn").addEventListener('click', function(){
  console.log("tails button clicked")
  fetch(`/api?answer=${"tails"}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        if (data.check == true){ 
        document.getElementById("result").innerHTML = "You guessed correctly!";
        document.getElementById("coin").src="https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_SY580_.jpg"
        }
        else { 
        document.getElementById("result").innerHTML = "You guessed incorrectly!";
        document.getElementById("coin").src='https://i.ebayimg.com/images/g/xtcAAOSwLwBaZigS/s-l400.jpg';
        }
      });

  })

