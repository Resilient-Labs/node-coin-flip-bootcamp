const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

function flipCoin() {
  const outcomes = ["heads", "tails"];
  return outcomes[Math.floor(Math.random() * 2)];
}

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  else if (page == '/api') {
    if ('choice' in params) {
      const userChoice = params['choice'];
      const coinResult = flipCoin();
      const isWin = userChoice === coinResult;

      res.writeHead(200, { 'Content-Type': 'application/json' });
      const result = {
        result: coinResult,
        win: isWin
      };
      res.end(JSON.stringify(result));
    }
  }

  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  } 
  
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } 
  
  else {
    // Handle 404 error
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404!! Page not found');
  }
});

server.listen(8000);


    // if('student' in params){
    //   if(params['student']== 'leon'){
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       name: "leon",
    //       status: "Boss Man",
    //       currentOccupation: "Baller"
    //     }
    //     res.end(JSON.stringify(objToJson));
    //   }//student = leon
    //   else if(params['student'] != 'leon'){
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       name: "unknown",
    //       status: "unknown",
    //       currentOccupation: "unknown"
    //     }
        
    //   }//student != leon
    //student if
  //else if
  