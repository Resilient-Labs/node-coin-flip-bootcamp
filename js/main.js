class ApiRequest {
  constructor() {
    const headsButton = document.querySelector("#heads-button");
    const tailsButton = document.querySelector("#tails-button");
    this.coinFlipResultElement = document.querySelector("#coin-flip-result");
    this.predictionResultElement = document.querySelector("#prediction-result");
  
    headsButton.addEventListener("click", this.predictCoinToss.bind(this, "heads"));
    tailsButton.addEventListener("click", this.predictCoinToss.bind(this, "tails"));
  }

  predictCoinToss(face) {
    fetch(`api?prediction=${face}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      this.coinFlipResultElement.innerText = data.flipResult;
      this.predictionResultElement.innerText = data.predictionResult;
    });
  }
}

const apiRequest = new ApiRequest;