const http = require('http')
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const { flipCoin } = require('./problem'); 
//If module.exports is used as an object, it needs to be accessed as an object in server.js. 
//when you export something using module.exports, you can choose to export it as a single function, 
// as a property of an object, or as multiple properties on an object. 
// The way you export it affects how you need to import it. 

const server = http.createServer(function(req,res){
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);

    if (page == '/') {
        fs.readFile('index.html', function(err, data) {
          //generate and send the response
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      } else if (page == '/api') {
        if('coinOutcome' in params){
        res.writeHead(200, {'Content-Type': 'application/json'});
        let word = params['coinOutcome']
        let result = flipCoin();
          const objToJson = {
              result: result
            }
          res.end(JSON.stringify(objToJson));
        } 
    }else if (page == '/style.css'){
        fs.readFile('style.css', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
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
})

server.listen(3000);