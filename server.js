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
    arrayCoin = ['heads', 'tails']
    if('student' in params){
      if(params['student']== 'heads'){ // Check if student's choice is valid ('heads' or 'tails')
        res.writeHead(200, {'Content-Type': 'application/json'});
        random = arrayCoin[Math.floor(Math.random() * arrayCoin.length)]
        checkResult = params['student'].toLowerCase()
        if(checkResult == random ){ // Check if the player won or lost
          congrats = "won"
        }else{
          congrats = "lost"
        }// Prepare the JSON response
        console.log(checkResult, random, congrats)
        const objToJson = {
          playerChoice: `${checkResult}`,
          cpuChoice: `${random}`,
          winOrLose: `${congrats}`
        }
        // Send the response
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] = 'tails'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        random = arrayCoin[Math.floor(Math.random() * arrayCoin.length)]
        checkResult = params['student'].toLowerCase()
        if(checkResult == random ){
          congrats = "won"
        }else{
          congrats = "lost"
        }
        const objToJson = {
          playerChoice: `${checkResult}`,
          cpuChoice: `${random}`,
          winOrLose: `${congrats}`
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
      else if(params['student'] != 'tails' || params['student'] != 'heads' ){
      res.writeHead(200, {'Content-Type': 'application/json'});
      random = arrayCoin[Math.floor(Math.random() * arrayCoin.length)]
      checkResult = params['student'].toLowerCase()
      if(checkResult != random ){
        congrats = 'Please Enter "heads" or "tails"' // Invalid choice, send error response
    }
const objToJson = {
  winOrLose: `${congrats}`
}
res.end(JSON.stringify(objToJson));
      }
    }
  }//else if
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

server.listen(2000);
// i worked with Baki, joyce, jessica, tenzin, valery, victor 