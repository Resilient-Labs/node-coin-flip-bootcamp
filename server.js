const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
let score1 = 0;
let score2 = 0;

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    console.log(params)
    if ('p1' in params) {
      if (params['p1'] && params['p2']) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          player1: {
            name: params['p1'],
            status: "heads",
            currentScore: 0
          },
          player2: {
            name: params['p2'],
            status: "tails",
            currentScore: 0
          },
          coin: {
            front: 'heads',
            back: 'tails'
          }
        }
        //Trek helped me with updating the score logic and return a result
        let player1Score = objToJson.player1.currentScore
        let player2Score = objToJson.player2.currentScore
        let side = objToJson.coin
        let result = {}
        let player1Winner = false;
        let player2Winner = false;

        let turnFlip = Math.floor(Math.random() * 2) + 1 //random number generator 1 or 2
        let Coin;
        if (turnFlip === 1) {
          Coin = 'heads'
        } else {
          Coin = 'tails'
        }
        if (Coin === side.front) {
          player1Score += 1;
          score1 += player1Score;
          if (score1 === 5) {
            player1Winner = true;
          }

        } else if (Coin === side.back) {
          //if 2 it is tails (player tails wins)
          //score player tails++
          player2Score += 1;
          score2 += player2Score;
          if (score2 === 5) {
            player2Winner = true;
          }
        }
        if(score1 >= 5){
          score1 = 0;
          score2 = 0;
        }else if(score2 >=5){
          score1 = 0;
          score2 = 0;
        }
        result = {
          obj1: {
            name: objToJson.player1.name,
            status: objToJson.player1.status,
            score: score1,
            winStatus: player1Winner
          },
          obj2: {
            name: objToJson.player2.name,
            status: objToJson.player2.status,
            score: score2,
            winStatus: player2Winner
          },
          coinResult: Coin
        };
        console.log(score1)
        console.log(score2)
        console.log(result)
        res.end(JSON.stringify(result));

      }//student = leon
      else if (!params['p1'] || !params['p2']) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  }//else if
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else if (page == '/img/heads.jpg') {
    fs.readFile('img/heads.jpg', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else if (page == '/img/tails.jpg') {
    fs.readFile('img/tails.jpg', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }
  else {
    figlet('404!!', function (err, data) {
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
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
