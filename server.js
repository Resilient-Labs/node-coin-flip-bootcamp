const http = require('http');//telling server to get access to network
const fs = require('fs')// is giving server access to your local files
const url = require('url'); // the url is the url
const querystring = require('querystring');// is the paramater of the url


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
  }else if (page == '/api') { // this is what we will use for the fetch call
    if('bet' in params){
        let tails = 1
        let heads = 0
        let flip = Math.floor(Math.random () * 2)
      if(params['bet']== 'heads'&& flip === 0 ){

        res.writeHead(200, {'Content-Type': 'application/json'});
        const resultForServer = {
          result: "you won",
          
        }
        res.end(JSON.stringify(resultForServer));
      }
      else if(params['bet']== 'heads'&& flip === 1 ){

        res.writeHead(200, {'Content-Type': 'application/json'});
        const resultForServer = {
          result: "you lost",
          
        }
        res.end(JSON.stringify(resultForServer));
      }
      else if(params['bet']== 'tails'&& flip === 0 ){

        res.writeHead(200, {'Content-Type': 'application/json'});
        const resultForServer = {
          result: "you lost",
          
        }
        res.end(JSON.stringify(resultForServer));
      }
      else if(params['bet']== 'tails'&& flip === 1 ){

        res.writeHead(200, {'Content-Type': 'application/json'});
        const resultForServer = {
          result: "you won",
          
        }
        res.end(JSON.stringify(resultForServer));
      }
    }
  }else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  })
server.listen(8005);