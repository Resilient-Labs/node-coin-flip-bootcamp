const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
//const figlet = require('figlet')

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
    })
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'})
      res.write(data)
      res.end()
    })
  }else if (page == '/api'){
    if ('coinSide' in params ){
    let randomNumber = Math.random()
    let coin
    if(randomNumber <= 0.5){
        coin = 'heads'
        console.log(randomNumber)
    }
    else if(randomNumber > 0.5){
        coin = 'tails'
        console.log(randomNumber)
    }

    let whoWon
    if(params['coinSide'] == 'heads' && coin == 'heads' || params['coinSide'] == 'tails' && coin == 'tails'){
      whoWon = "YOU WIN"

    
    }
    else{
      whoWon = "You lose"
    }
    const objToJson = {
      status: whoWon,
      coinPick: coin
    }
    res.end(JSON.stringify(objToJson))
    
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
}
});

server.listen(8000);

