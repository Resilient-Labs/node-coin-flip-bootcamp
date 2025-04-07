document.getElementById("heads").addEventListener("click", function() {
    fetch('/api?choice=heads')
      .then(response => response.json())
      .then(data => {
        const resultMessage = data.win ? "You win! The coin landed on heads." : `You lose! The coin landed on ${data.result}.`;
        document.getElementById("results").textContent = resultMessage;
      })
      .catch(error => {
        console.log("Error:", error);
      });
  });
  
  document.getElementById("tails").addEventListener("click", function() {
    fetch('/api?choice=tails')
      .then(response => response.json())
      .then(data => {
        const resultMessage = data.win ? "You win! The coin landed on tails." : `You lose! The coin landed on ${data.result}.`;
        document.getElementById("results").textContent = resultMessage;
      })
      .catch(error => {
        console.log("Error:", error);
      });
  });
  