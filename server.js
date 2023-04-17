const http = require('http');// gives access to the module in this case its http which is an object that gives you access to req and res
const fs = require('fs') 
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(params)
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }


  else if (page == '/api') {
    coinArray = ['heads', 'tails']
    if ('penny' in params) {
      if (params.penny == 'heads') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        random = coinArray[Math.floor(Math.random() * coinArray.length)]
        checkFlip = params['penny'].toLowerCase()
        if (checkFlip == random) {
          results = "Winner!"
        } else {
          results = "Loser!"
        }
        console.log(random, checkFlip, results)
        const objToJson = {
          playersChoice: checkFlip,
          coinRandom: random,
          whoWon: results
        }
        res.end(JSON.stringify(objToJson));
      } else if (params['penny'] == 'tails') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        random = coinArray[Math.floor(Math.random() * coinArray.length)]
        checkFlip = params['penny'].toLowerCase()
        if (checkFlip == random) {
          results = "Winner!"
        } else {
          results = "Loser!"
        }
        const objToJson = {
          playersChoice: checkFlip,
          coinRandom: random,
          whoWon: results
        }
        res.end(JSON.stringify(objToJson));
      }else if (params['penny'] != 'tails' || params['penny'] != 'heads') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        random = coinArray[Math.floor(Math.random() * coinArray.length)]
        checkFlip = params['penny'].toLowerCase()
        if (checkFlip != random) {
          results = "Please enter 'heads' or 'tails'"
        } 
        const objToJson = {
          whoWon: `${results}`
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  } 
  
  
  
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

server.listen(8001);
