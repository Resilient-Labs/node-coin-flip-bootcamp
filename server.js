
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
      console.log(data)
      res.end();
    });
  }
  else if (page == '/api') {
    // checks if input is in the URL parameter
    if('input' in params){
      res.writeHead(200, {'Content-Type': 'application/json'});
      let choice = params['input']
      let coin = ""
      let result = ""


      if(choice === 'heads'){
        let random = Math.floor(Math.random()*2) 
        if(random === 1){
          coin = "heads"
          result = "WINNER"
          
        }else{
          coin = "tails"
          result = "LOSER"
        }
      }

      else if(choice === 'tails'){
        let random = Math.floor(Math.random()*2) 
        if(random === 1){
          coin = "heads"
          result = "LOSER"
        }else{
          coin = "tails"
          result = "WINNER"
          
        }
      }
      
      const objToJson = {
        flip: coin,
        choice: choice,
        result: result,

      }
      res.end(JSON.stringify(objToJson));
    }
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
