const http = require('http')
const fs = require('fs')
const url = require('url');
const querystring = require('querystring')

http.createServer(function( req, res ) {
    const page = url.parse(req.url).pathname
    const param = querystring.parse(url.parse(req.url).query)
if ( page == '/' ){
    fs.readFile('index.html', function ( err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    }
    else if ( page == '/api') {
        if( 'cointoss' in param) {
          let coinSide = param['cointoss']
          let coinName = `${coinSide}`
          let probability = Math.ceil(Math.random() * 2)

          if( probability === 2 && coinName === 'tails') {
              coinLandedOn = 'Heads! Your Wrong!'
          } else if ( probability === 1 && coinName === 'heads') {
              coinLandedOn = 'Tails! Nope!'
          } else if ( probability === 2 && coinName === 'heads') {     
              coinLandedOn = 'Heads! Right On!'
          } else if ( probability === 1 && coinName === 'tails') {       
              coinLandedOn = 'Tails! Nice!'
          } else {
              coinLandedOn = 'Heads of Tails!?'
          }
        }
        res.writeHead(200, {'Content-Type': 'application/json'});

        res.end(JSON.stringify({result: coinLandedOn}))
        }
    
    else if (page == '/style.css'){
        fs.readFile('style.css', function(err, data) {
          res.write(data);
          res.end();
        });
    }else if (page == '/img/cat.gif'){
        fs.readFile('img/cat.gif', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/css'})
          res.write(data);
          res.end();
        });
    }else if (page == '/main.js'){
        fs.readFile('main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
    });
}
}).listen(8000)
