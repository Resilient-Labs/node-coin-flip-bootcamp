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
  if('coinFlip' in params){

    const userChoice = params['coinFlip'].toLocaleLowerCase().trim()

    let userCoin

    if(userChoice == 'truth' || userChoice === 'heads'){
      userCoin = 'heads'
    }
    else if (userChoice === 'dare' || userChoice === 'tails'){
      userCoin = 'tails'
    }
    else {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify({
        error: 'Choose truth or dare.'
      }))
      return
    }

    const coinToss = ['heads', 'tails']

    const theOutcome = coinToss[Math.floor(Math.random() * coinToss.length)]

    let resultMessage

    if(userCoin === theOutcome){
      resultMessage = 'You called it. Fate is on your side.'
    }else{
      resultMessage = 'Fate had other plans.'
    }

    let choiceLabel

    if(userCoin === 'heads'){
      choiceLabel = 'Truth'
    }
    else{
      choiceLabel = 'Dare'
    }

    const objToJson = {
      choice: choiceLabel,
      theOutcome: theOutcome,
      message: resultMessage
    }
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(objToJson))
  }
}



  /*else if (page == '/otherpage') {
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
    if('student' in params){
      if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] != 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }*/
        // res.end(JSON.stringify(objToJson));
      /*}//student != leon
    }//student if
  }//else if*/

  else if (page == '/css/normalize.css'){
    fs.readFile('css/normalize.css', function(err, data){
      res.writeHead(200, {'Content-Type': 'text/css'})
      res.write(data);
      res.end();
    })
  }

  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'})
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
