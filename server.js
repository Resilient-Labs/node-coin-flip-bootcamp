const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page, params);
  if (page == '/') {
    console.log("index page")
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    console.log("index page")

    fs.readFile('otherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    console.log("other other")
    fs.readFile('otherotherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  /************ API ************/
  if (page === '/api') {
    console.log('api end point');

    function coinFlip() {
      return Math.random() < 0.5 ? 'heads' : 'tails';
    }

    // set variables
    const tossResult = coinFlip();
    const userSelection = (params.choice || '').toLowerCase();

    // compare coin flip toss result to userSelection
    const result = (userSelection === tossResult ? 'correct' : 'wrong');

    // console.log(`Coin Toss: ${tossResult}`);
    // console.log(`User Guess: ${userSelection}`);
    // console.log(`The user guessed ${result}`);

    // Format response to JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const objToJson = {
      tossResult: tossResult,
      userSelection: userSelection,
      result: result
    };
    return res.end(JSON.stringify(objToJson));
  }

  /************************/
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
  } else {
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

server.listen(8001, () => console.log('Server listening on http://localhost:8001'));