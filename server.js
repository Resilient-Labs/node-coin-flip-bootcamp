//  psuedo code
//  logic happens in server side so code or data does not get manipulated
//  Goal: get user guess (heads or tails), server result (heads or tails), and game outcome (win or lose)
//  get user guess by parsing it from url
//  get random tails or head result from server
//  check for win if user guess = server result and show as game outcome

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  // edit for coin flip logic
 else if (page == '/api/coin-flip-game') {
  // Parse query string (?guess=heads)
  // req.url is the full URL the user typed (e.g /api/coin-flip-game?guess=heads)
  // url.parse(req.url) breaks that URL into pieces (like pathname and query string)
  // .query gives you just the part after the “?”, for example: guess=heads now is { guess: 'heads' }
  const userParams = querystring.parse(url.parse(req.url).query);
  // userParams['guess'] looks up the value of guess in the object (e.g., 'heads')
  // .toLowerCase() turns it into lowercase so that Heads, HEADS, or heads are same
  // .trim() removes any accidental spaces (e.g., ' heads ' becomes 'heads')
  // doesnt exist then the code sets userGuess to an empty string '' to avoid errors
  const userGuess = userParams['guess'] ? userParams['guess'].toLowerCase().trim() : '';

  // so if userParams = { guess: 'HEADS' } then userGuess = 'heads'

  // only proceed if guess is heads or tails, so http://localhost:3000/api/coin-flip-game?guess=heads or tails
  if (userGuess === 'heads' || userGuess === 'tails') {
    const gameBox = ['heads', 'tails'];
    const randomIndex = Math.floor(Math.random() * gameBox.length);
    const coinResult = gameBox[randomIndex];

    let gameOutcome = '';
    if (userGuess === coinResult) {
      gameOutcome = 'You Win!';
    } else {
      gameOutcome = 'You Lose!';
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
      const objToJson = {
        serverGuess: userGuess,
        serverResult: coinResult,
        serverGameResult: gameOutcome
      };
    res.end(JSON.stringify(objToJson));
  } else {
    // Handle invalid input
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      error: 'Invalid guess. Please use "heads" or "tails".',
      serverGuess: userGuess
    }));
  }
}
// end of edit
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(2000);

console.log("The server is now working");

//Citations:
// Referenced from Resilient Coders Week 9 Matierial
// Use of House Cass, Google AI Overview, Chatgpt for debug and syntax reference