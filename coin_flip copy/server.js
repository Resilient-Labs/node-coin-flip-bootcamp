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
    if('cointoss' in params) {
      let randomCoin = Math.ceil(Math.random() * 2)

      if(randomCoin === 1) {
          result = 'Heads'
          img = 'https://i.postimg.cc/zDx5dvs5/heads.png'
      } else if (randomCoin === 2) {
          result = 'Tails'
          img = 'https://i.postimg.cc/283YgmYW/tails.png'
      }
    }
    res.writeHead(200, {'Content-Type': 'application/json'})
    const objToJson = {
        result: result,
        image: img
    }
    res.end(JSON.stringify(objToJson))
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
})
server.listen(3000)