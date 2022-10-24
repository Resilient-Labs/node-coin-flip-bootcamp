const http = require('http');
const fs = require('fs');
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
    } else if (page == '/api') {
        if('bet' in params){
          let input = params['bet']
          let bet = `${input}`

          let randomNum = Math.floor(Math.random() * 10) 
  
          if (randomNum % 2 === 0){
          coinFlip = 'heads'
          } else {
          coinFlip = 'tails'
          }
      
          if(coinFlip === bet){
          winner = true
      
          }else {
          winner = false
          }
          
          
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          winner: winner
        }
        res.end(JSON.stringify(objToJson));
        //student != leon
    }/* else {
        figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });
    }*/
  });
  
  server.listen(8900);