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
    fs.readFile('index1.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/api') {
    if ('choice' in params) {
      const playerChoice = params['choice']; //  "head" or "tail"
      const botChoice = playerChoice === 'head' ? 'tail' : 'head'; // Bot picks opposite
      const randomNumber = Math.random();
      const coin = randomNumber < 0.5 ? 'tail' : 'head'; // Coin flip
  
      let outcomeMessage = '';
      let winner = '';
  
      if (coin === playerChoice) {
        outcomeMessage = 'Winna Winna Chicken Dinna';
        winner = 'player';
      } else {
        outcomeMessage = 'Big Fat Loser';
        winner = 'bot';
      }
  
      // Use JSON response creation from example file
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const objToJson = {
        user: playerChoice,
        bot: botChoice,
        coin: coin,
        winner: winner,
        outcome: outcomeMessage
      };
      res.end(JSON.stringify(objToJson));
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing choices (head or tail)' }));
    }}
    else if (page == '/css/style1.css'){
    fs.readFile('css/style1.css', function(err, data) {
      res.write(data);
      res.end();
    })
  }else if (page == '/js/main1.js'){
    fs.readFile('js/main1.js', function(err, data) {
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
server.listen(8001);
  

//attempt 2 w server1.js, get rid of main js functions and statements in node, will crash it!  
//   else if (page == '/api') {
//     console.log(req)
//     if ('choice' in params) {
//     let playerScore = ''
//     let botScore = ''
//     let coin = ''
//     let outcomeMessage = ''
//     let numberRandom = Math.random()
//     if (numberRandom < 0.5){
//       coin = 'head'
//     }
//     else if (numberRandom > 0.5){
//       coin = 'tail'
//     }
//     if (params['choice'] == coin) {
//       outcomeMessage = 'Winna Winna Chicken Dinna'
//       playerScore += 1;
//     }
//     else {
//       outcomeMessage = 'Big Fat Loser'
//       botScore += 1;
//     }
//     res.writeHead(200, {'Content-Type': 'application/json'});
//         const objToJson = {
//           user: params['choice'],
//           computer: coin,
//           outcome: outcomeMessage
//     }
//             res.end(JSON.stringify(objToJson));
//     }
//   }
//   else if (page == '/css/style1.css'){
//     fs.readFile('css/style1.css', function(err, data) {
//       res.write(data);
//       res.end();
//     });
//   }else if (page == '/js/main1.js'){
//     fs.readFile('js/main1.js', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/javascript'});
//       res.write(data);
//       res.end();
//     });
//   }else{
//     figlet('404!!', function(err, data) {
//       if (err) {
//           console.log('Something went wrong...');
//           console.dir(err);
//           return;
//       }
//       res.write(data);
//       res.end();
//     });
//   }
// });
// server.listen(8001);
//end attempt 2 w server1.js  