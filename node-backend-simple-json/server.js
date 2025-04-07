const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

// class Player {
//   choice(){
//     return Math.floor(Math.random() * 2);
//   }
// }

// let coinFlip = Math.floor(Math.random() * 2);
// let humanPlayer = new Player();

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
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('flip' in params){
      let coinFlip = Math.floor(Math.random() * 2);
      console.log('reached line 43', params, coinFlip)
      if(params['flip']== 'heads' && coinFlip === 0){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Human Player wins",
          status: "Heads",
          flipResult: coinFlip
        }
        // if(humanPlayer.choice == 0 && coinFlip == 0){
        //   objToJson.name = "Human player wins!"
        //   objToJson.status = "Heads"
        //   objToJson.humanPlayerChoice = `${humanPlayer.choice()}`,
        //   objToJson.flipResult = coinFlip
        // } else if (humanPlayer.choice == 1 && coinFlip == 0) {
        //   objToJson.name = "Human player loses",
        //   objToJson.status = "Heads",
        //   objToJson.humanPlayerChoice = `${humanPlayer.choice()}`,
        //   objToJson.flipResult = coinFlip
        // }
        console.log('reached line 63', params, coinFlip)
        res.end(JSON.stringify(objToJson));
        console.log('reached line 65', params, coinFlip)
      }//student = leon
      else if(params['flip']== 'heads' && coinFlip === 1){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Human Player loses",
          status: "Tails",
          flipResult: coinFlip
        }
        // if(humanPlayer.choice == 0 && coinFlip == 0){
        //   objToJson.name = "Human player wins!"
        //   objToJson.status = "Heads"
        //   objToJson.humanPlayerChoice = `${humanPlayer.choice()}`,
        //   objToJson.flipResult = coinFlip
        // } else if (humanPlayer.choice == 1 && coinFlip == 0) {
        //   objToJson.name = "Human player loses",
        //   objToJson.status = "Heads",
        //   objToJson.humanPlayerChoice = `${humanPlayer.choice()}`,
        //   objToJson.flipResult = coinFlip
        // }
        console.log('reached line 86', params, coinFlip)
        res.end(JSON.stringify(objToJson));
      }
      else if(params['flip'] == 'tails' && coinFlip === 1){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Human Player wins",
          status: "Tails",
          flipResult: coinFlip
        }
        // if(humanPlayer.choice == 1 && coinFlip == 1){
        //   objToJson.name = "Human Player wins!"
        //   objToJson.status = "Tails",
        //   objToJson.humanPlayerChoice = `${humanPlayer.choice()}`,
        //   objToJson.flipResult = coinFlip
        // } else if (humanPlayer.choice == 0 && coinFlip == 1){
        //   objToJson.name = "Human Player loses"
        //   objToJson.status = "Tails",
        //   objToJson.humanPlayerChoice = `${humanPlayer.choice()}`,
        //   objToJson.flipResult = coinFlip
        // }
        res.end(JSON.stringify(objToJson));
        console.log('reached line 109', params, coinFlip)
      }
      else if(params['flip'] == 'tails' && coinFlip === 0){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Human Player loses",
          status: "Heads",
          flipResult: coinFlip
        }
        // if(humanPlayer.choice == 1 && coinFlip == 1){
        //   objToJson.name = "Human Player wins!"
        //   objToJson.status = "Tails",
        //   objToJson.humanPlayerChoice = `${humanPlayer.choice()}`,
        //   objToJson.flipResult = coinFlip
        // } else if (humanPlayer.choice == 0 && coinFlip == 1){
        //   objToJson.name = "Human Player loses"
        //   objToJson.status = "Tails",
        //   objToJson.humanPlayerChoice = `${humanPlayer.choice()}`,
        //   objToJson.flipResult = coinFlip
        // }
        res.end(JSON.stringify(objToJson));
        console.log('reached line 131', params, coinFlip)
      }//student != leon
      console.log('reached line 133', params, coinFlip)
    }//student if
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
      console.log(res.write(data));
      res.end();
    });
  }
});

server.listen(8000);
