const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

// Take name from Client Side
//wait to store for flip heads or tails
//Flip for bot server side
//wait to see if heads or tails
//respond with win or lose (can be setup in the DOM)


    // if(clicked heads && flip % 2 == 0){
    //     return heads
    // }else{
    //     return tails
    // }


const server = http.createServer(function(req, res) {
    let  coinFlip = Math.floor(Math.random()*2)
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
  // else if (page == '/otherpage') {
  //   fs.readFile('otherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // else if (page == '/otherotherpage') {
  //   fs.readFile('otherotherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  else if (page == '/api') {
    if('flipResult' in params){
        let objToJson
      if(params['flipResult'] == 'heads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        if(coinFlip == 0){
            objToJson = {
                //   name: "leon",
                  status: "You Win!",
                  // winnerOrLoser: "Baller"
                }
        }else if(coinFlip == 1){
            objToJson = {
                //   name: "leon",
                  status: "You Lose!",
                  // winnerOrLoser: "Loser"
                }
        }       
        res.end(JSON.stringify(objToJson));
      }//bet = leon
      else if(params['flipResult'] != 'heads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        if(coinFlip == 1){
            objToJson = {
                //   name: "leon",
                  status: "You Win!",
                  // winnerOrLoser: "Baller"
                }
        }else if(coinFlip == 0){
            objToJson = {
                // name: "unknown",
                status: "You Lose!",
                // winnerOrLoser: "Loser"
              }
        }        
        res.end(JSON.stringify(objToJson));
      }//bet != leon
    }//bet if
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

server.listen(8000);
