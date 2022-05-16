const http = require('http');//telling server to access network
const fs = require('fs')// giving server access to your local files
const url = require('url'); // url
const querystring = require('querystring');// the parameter of the url

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
  }else if (page == '/api') {
    if('bet' in params){
        let tails = 1
        let heads = 0
        let flip = Math.floor(Math.random () * 2)
      if(params['bet']== 'Heads'&& flip === 0 ){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const result = {
          result: "Congrats, you've won!",
        }
        res.end(JSON.stringify(result));
      }
      else if(params['bet']== 'Heads'&& flip === 1 ){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const result = {
          result: "Sorry, you've lost.",
        }
        res.end(JSON.stringify(result));
      }
      else if(params['bet']== 'Tails'&& flip === 0 ){

        res.writeHead(200, {'Content-Type': 'application/json'});
        const result = {
          result: "Womp Womp. Sorry!",
          
        }
        res.end(JSON.stringify(result));
      }
      else if(params['bet']== 'Tails'&& flip === 1 ){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const result = {
          result: "Yay! You won.",
        }
        res.end(JSON.stringify(result));
      }
    }
  }else if (page == '/style.css'){
    console.log(344);
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/index.js'){
    fs.readFile('index.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == "/casino.jpg") {
    fs.readFile("casino.jpg", function (err, data) {
      res.write(data);
      res.end();
    });
  }
})
server.listen(8000);