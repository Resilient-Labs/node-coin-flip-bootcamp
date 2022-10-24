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
 
  else if (page == '/flip') {
    
    if('choice' in params){
      let flip = Math.floor(Math.random() * 2)
      if (flip >=1) {
        flipres = "tails"
      }

      else {
        flipres = "heads"
      }
      if (params['choice'] == 'heads') {
        const objToJson = {
          choice: 'heads',
          flipresult: flipres
        }
        console.log(JSON.stringify(objToJson))
        res.end(JSON.stringify(objToJson))
        }
      
      else  {
        const objToJson = {
          choice: 'tails',
          flipresult: flipres
        }
        console.log(JSON.stringify(objToJson))
        res.end(JSON.stringify(objToJson))
      }
  
}
  }

  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  
  else{
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
