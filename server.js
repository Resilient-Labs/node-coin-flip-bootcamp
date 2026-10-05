const path = require('path');
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
      }else if (page == '/api') {
      let flipArray = ['Heads', 'Tails']
      let winOrLose;
   
      //verifica que la eleccion por el estudiante es heads
          if('coinFlip' in params){
            if(params['coinFlip'] == 'Heads'){
              res.writeHead(200, {'Content-Type': 'application/json'});
              randomFlip = flipArray[Math.floor(Math.random() * 2)]
              if(params['coinFlip'] == randomFlip){
                winOrLose = 'Win'
             
              }else{
                winOrLose = 'Lose'
              }
              const objToJson = {
                yourChoice: "Heads",
                flipResult: `The flip was ${randomFlip}`,
                results: `You ${winOrLose}!`,
                
              }
              res.end(JSON.stringify(objToJson));
            }
            //esto verifica si el valor que eligio el estudiante fue tails
            else if(params['coinFlip'] == 'Tails'){
              res.writeHead(200, {'Content-Type': 'application/json'});
              randomFlip = flipArray[Math.floor(Math.random() * 2)]
              if(params['coinFlip'] == randomFlip){
                winOrLose = 'Win'
               
              }else{
                winOrLose = 'Lose'
              }
              console.log(randomFlip)
              const objToJson = {
                yourChoice: "Tails",
                flipResult: `The flip was ${randomFlip}`,
                results: `You ${winOrLose}!`,
              
              }
              res.end(JSON.stringify(objToJson));
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
      }else if (page.startsWith('/img')){
        const imagePath = '.' + page;
        const ext = path.extname(imagePath).toLowerCase();
        const mimeTypes = {
          '.gif': 'image/gif',
          '.png': 'image/png',
          '.jpg': 'image/jpeg'
        }
        fs.readFile(imagePath, function(err, data) {
          res.writeHead(200, {'Content-Type': mimeTypes[ext] || 'application/octet-stream'});
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