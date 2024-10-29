const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

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
  else if (page == '/api') {
    let n = Math.random()//above .5 = head, less is tails
    let botChoice = ''
    if (n > .5) {
      botChoice = 'heads'
    } else{
      botChoice = 'tails'
    }
    if ('choice' in params) {
      if (params['choice'] == botChoice) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          result: "Win",
          botChoice: botChoice
        }
        res.end(JSON.stringify(objToJson));
        
      }//word == true
      else if (params['choice'] !== botChoice) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          result: 'Lose',
          botChoice: botChoice
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
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

server.listen(9003);
