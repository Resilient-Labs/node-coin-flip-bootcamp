
class CoinFlipBackend {
  constructor() {
    this.http = require('http');
    this.fs = require('fs')
    this.url = require('url');
    this.querystring = require('querystring');

    this.createServer();

    this.server.listen(8000);
  }

  createServer() {
    this.server = this.http.createServer((req, res) => {
      const page = this.url.parse(req.url).pathname;
      const params = this.querystring.parse(this.url.parse(req.url).query);
      console.log(page);
      if (page == '/') {
        this.fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }
      else if (page == '/api') {
        console.log(params);
    
        if('prediction' in params) {
          const result = this.coinFlip();
    
          res.writeHead(200, {'Content-Type': 'application/json'});
          const resultObject = {
            flipResult: result,
            predictionResult: result === params.prediction
          }
          res.end(JSON.stringify(resultObject));
        }
      }
      else if (page == '/css/reset.css'){
        this.fs.readFile('css/reset.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }
      else if (page == '/css/theme-default.css'){
        this.fs.readFile('css/theme-default.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }
      else if (page == '/css/style.css'){
        this.fs.readFile('css/style.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }
      else if (page == '/js/main.js'){
        this.fs.readFile('js/main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
      else {
        res.writeHead(404, {'Content-Type': 'text'});
        res.write("404!");
        res.end();
      }
    });
  }

  coinFlip() {
    return Math.random() > .5 ? "heads" : "tails";
  }
}

const coinFlipBackend = new CoinFlipBackend;