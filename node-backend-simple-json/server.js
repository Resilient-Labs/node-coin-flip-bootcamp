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

  else if (page == '/heads') {
    let coin = flipHeads()
    res.end(coin)
  }
  else if (page == '/tails') {
    let coin2 = flipTails()
    res.end(coin2)
  }
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

server.listen(8000);

function flipHeads() {
  let heads = Math.floor(Math.random() * 2)
  if (heads === 0) {
      return 'You Win'
  } else {
      return 'You Lose'
  }
}

function flipTails() {
  let tails = Math.floor(Math.random() * 2)
  if (tails === 1) {
      return 'You Win'
  } else {
      return 'You Lose'
  }
}