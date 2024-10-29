document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq() {

  let choice = document.querySelector("#choice").value;
  if (choice != "heads" && choice != "tails") {
    document.querySelector("#result").textContent = "Please input either 'heads' or 'tails'"
  }
  else {
    fetch(`/api?choice=${choice}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        document.querySelector("#result").textContent = `You ${data.result}!
        The bot chose ${data.botChoice}`
        
      });
  }
}