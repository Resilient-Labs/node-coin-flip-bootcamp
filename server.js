// Created by House Gardner
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(params)
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) { //get HTML file
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
    if('choice' in params){
       let pick = Math.ceil(Math.random()*2)
       let headsOrTails;
       if (pick === 1){
       headsOrTails = "heads"
       } else{
        headsOrTails ="tails"
       }
       let response;
       if(params['choice']=== headsOrTails){
       response = true
       }else{
       response = false
       }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(JSON.stringify(respon));
    }
  }else if (page == '/css/style.css'){
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
