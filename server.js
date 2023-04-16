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
  else if (page == '/api') {
    newArr = ['heads', 'tails']
    if('side' in params){
      if(params['side'].toLowerCase() == "heads"){
        res.writeHead(200, {'Content-Type': 'application/json'});
       random = newArr[Math.floor(Math.random()*newArr.length)]
       input =  params['side'].toLowerCase()

      if(input == random){
        results = "You won!"
      } else{
        results = "You lost"
      }
        const objToJson = {
          side: `${results}`,
        
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['side'].toLowerCase() == "tails"){
        res.writeHead(200, {'Content-Type': 'application/json'});
       random = newArr[Math.floor(Math.random()*newArr.length)]
       input =  params['side'].toLowerCase()

      if(input == random){
        results = "You won!"
      } else{
        results = "You lost!"
      }
        const objToJson = {
          side: `${results}`,
        
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['side'].toLowerCase() != "tails" || params['side'].toLowerCase() != "heads"){
        res.writeHead(200, {'Content-Type': 'application/json'});
       random = newArr[Math.floor(Math.random()*newArr.length)]
       input =  params['side'].toLowerCase()

      if(input != random){
        results = "Please provide a valid input."
      }
        const objToJson = {
          side: `${results}`,
        
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
    }
    } else if (page == '/css/style.css'){
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