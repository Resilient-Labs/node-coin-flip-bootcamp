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

  //api
  //logic here
  else if (page == '/api') {
    if ('coinFlip' in params){
        if (params['coinFlip'] == 'heads'){
            res.writeHead(200, { 'Content-Type':'application/json'});

            const sides = ['heads', 'tails']

            let sidePicked = sides[(Math.floor(Math.random() * sides.length))]

            if ( sidePicked == params['coinFlip']){
                resultText = 'win'
            }else {
                resultText = 'lose'
            }

            const objToJson = {
                name:"heads",
                resultText: `you ${resultText}`,
                sidePicked: `the Flip was ${sidePicked}`
            }
            res.end(JSON.stringify(objToJson));
        }
        else if (params['coinFlip'] == 'tails'){
            res.writeHead(200, {'Content-Type':'application/json'});

            const sides = ['heads', 'tails']

            let sidePicked = sides[ (Math.floor(Math.random() * sides.length))]

             if ( sidePicked == params['coinFlip']){
                resultText = 'win'
            }else {
                resultText = 'lose'
            }

            const objToJson = {
                name:"tails",
                resultText: `you ${resultText}`,
                sidePicked: `the Flip was ${sidePicked}`
            }
            res.end(JSON.stringify(objToJson));
        }
    }
  }
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
    else if (page == '/js/main.js'){
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
