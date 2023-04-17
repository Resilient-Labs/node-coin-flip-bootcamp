const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

//global scope server side function to serve the JS up 
function flip(){
  let flipResult = Math.random() < 0.5
  if(flipResult){
    return 'TAILS'
  } else {
    return 'HEADS'
  }
}

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
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.end(data)
    });
  } else if(page == '/flip'){
    const userInput = params['coin'].toUpperCase().trim()
    let flipResult = flip()
    let response = {
      winStatus: userInput === flipResult ? 'You win' : 'You lose',
      result: flipResult
    } //returns heads or tails and writes the data back to client 
    
    
    res.end(JSON.stringify(response));
  }
  else{
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
}); //end server 

server.listen(8000);

//you enter heads - comes from client/userinput
// bot did heads - comes from flip (randomized)
//win, lose - if/else 