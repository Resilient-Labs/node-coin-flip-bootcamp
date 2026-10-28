const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')// does something

//function that performs the flip
function flipCoin() {
    let num = Math.random()
    if (num < .5) {
        return 'heads'
    } else {
        return 'tails'
    }
}

//server to display
const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname; // taking the url and making it readable
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page); 
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
    // if you click coin flip
  else if (page == '/flip') {
      if ('choice' in params) {
        let result = flipCoin()
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: result
        }
        res.end(JSON.stringify(objToJson));
    }
    } 
        
  //else if
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