// create a function for a coin flip 
// getElementById

// Create a simple web application
// Use http to create the server and fs to read your html file.
// Try creating a coin flip guessing game

document.addEventListener('DOMContentLoaded', function () {
  // get references for the buttons
  const headsButton = document.getElementById('Heads')
  const tailsButton = document.getElementById('Tails')
  const statusSpan = document.getElementById('status')

  // heads is click
  headsButton.addEventListener('click', function() {
    playGame('Heads')
  })

  // tails is click
  tailsButton.addEventListener('click', function () {
    playGame('Tails')
  })

  // fuctions for the game
  function playGame(userChoice) {
    // Randomly pick Heads or Tails
    const options = ['Heads', 'Tails']
    const randomIndex = Math.floor(Math.random() * options.length)
    const choice = options
    const coinResult = choice[randomIndex]

    // Check if user guessed right
    if (userChoice === coinResult) {
      statusSpan.textContent = `You chose ${userChoice}. The coin landed on ${coinResult}. You win!`
    } else {
      statusSpan.textContent = `You chose ${userChoice}. The coin landed on ${coinResult}. You lose.`
    }
  }
})