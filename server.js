const http = require('http');
const fs = require('fs')
const url = require('url')
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    console.log(page);
    
    if (page == '/') {
      fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    }else if (page == '/api') {{{
        res.writeHead(200, {'Content-Type': 'application/json'});
        let ticket = Math.floor(Math.random()* 100)
        let winningSide;
        if (ticket >= 50){
            winningSide = 'Heads'
        }
        else {
            winningSide = 'Tails'
        }
        res.end(JSON.stringify(winningSide));
      }
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

  


