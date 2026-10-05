const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('./node-coin-flip-game/node_modules/figlet/dist/types/cjs/figlet.d.cts')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
  else if (page == '/api') {
    if('coinflip' in params){
     /* if(params['coinflip']== 'heads'){*/
        res.writeHead(200, {'Content-Type': 'application/json'});
        let coinFlip = ['heads', 'tails'];
        let coin = coinFlip[Math.floor(Math.random() * coinFlip.length)];
        if(params['coinflip']=== coin){
          winner = "You win!";
        } else {
          winner = "You lose!";
        }
        const gameOutcome = {
          results: `${coin}`,
          message: `${winner}`
        }
        res.end(JSON.stringify(gameOutcome));
    }
  }  
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page === '/js/main.js') {
    fs.readFile('js/main.js', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Server Error');
        return;
      }

      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.end(data);
    });
  } else {
    figlet('404!!', (err, data) => {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Server Error');
        return;
      }

      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end(data);
    });
  }
});

server.listen(8000);