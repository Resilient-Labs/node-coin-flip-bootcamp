const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const { constants } = require('buffer');

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
    if ('coinFlip' in params) {
      const randomNumber = Math.ceil(Math.random() * 2);
      let botsChoice
      if (randomNumber == 1) {
        botsChoice = 'heads'
      }
      else if (randomNumber == 2) {
        botsChoice = 'tails'
      }
      let winOrLose
      if (params['coinFlip'] == 'heads' && botsChoice == 'heads' || params['coinFlip'] == 'tails' && botsChoice == 'tails') {
        winOrLose = "Winner!";
      }
      else {
        winOrLose = "loser"
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const objToJson = {
        result: winOrLose,
        botsPick: botsChoice,
        userPick: params['coinFlip']
 
      }
      res.end(JSON.stringify(objToJson));
      //student = leon

    }//student if
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

server.listen(8000);
