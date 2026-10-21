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
      if(params['coinFlip']== 'heads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const flipCoin=["heads", "tails"]
        let randomFlip=flipCoin[(Math.floor(Math.random()*flipCoin.length))]
        let winOrLose
        if(params["coinFlip"] ==randomFlip){
          winOrLose='Won'
        }
        else
        {
          winOrLose="Lose"
        }
        const objToJson = {
          yourChoice: "heads",
          flipResult: randomFlip,
          winOrLoseMessage: winOrLose
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['coinFlip'] == 'tails'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const flipCoin=["heads", "tails"]
        let randomFlip=flipCoin[(Math.floor(Math.random()*flipCoin.length))]
        let winOrLose
         if(params["coinFlip"] ==randomFlip){
          winOrLose='Won'
        }
        else
        {
          winOrLose="Lose"
        }
        const objToJson = {
          yourChoice: "tails",
          flipResult: randomFlip,
          winOrLoseMessage: winOrLose
        }
        res.end(JSON.stringify(objToJson));
      }//student != soyal
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
    }else if (page == '/images/HeadsorTailsCoin.jpg'){
    fs.readFile('images/HeadsorTailsCoin.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
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

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
