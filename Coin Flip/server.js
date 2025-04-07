const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');


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
    else if (page == '/api') {
      if('choice' in params){
        let coin = ""
        let winOrLose = ""
        let random = Math.random()
        if(random <= .5){
          coin = 'heads'
        }else {
          coin = 'tails'
        }
        if(params['choice'] == coin){
          winOrLose = 'You Win'
        } else {
          winOrLose = 'You Lose'
        }
        console.log(params['choice']);
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          HorT: params['choice'],
          outcome : winOrLose,
          computer: coin
          }
          res.end(JSON.stringify(objToJson));
        }
      }
       else if (page == '/css/style.css'){
    fs.readFile('/css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
      fs.readFile('js/main.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });}})

server.listen(8000);


