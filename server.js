const http = require('http')
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

// const Express = require('express');
// const app = new Express();

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(params)
  // app.use(Express.static(__dirname+'/public'));

  if (page === '/hello') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<blink>hello</blink>')
    res.end()
  }
  else if (page === '/goodbye') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h3 style="color: red">goodbye</h3>')
    res.end()
  }
  else if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'content-type': 'text/html' })
      res.write(data)
      res.end()
    });
  }
  else if (page == '/img/Heads.jpg') {
    fs.readFile('./img/Heads.jpg', function (err, data) {
      res.writeHead(200, { 'content-type': 'image/jpeg' })
      res.write(data)
      res.end()
    });
  }
  else if (page == '/img/Tails.jpg') {
    fs.readFile('./img/Tails.jpg', function (err, data) {
      res.writeHead(200, { 'content-type': 'image/jpeg' })
      res.write(data)
      res.end()
    });
  }
  else if (page === '/coin') { // creates a coin page
    let flipCoin = Math.floor(Math.random() * 2) + 1
    const coin = flipCoin === 1 ? 'Heads' : 'Tails'
    console.log(coin, params.guess)


    res.writeHead(200, { 'Content-Type': 'application/json' }); // 200 = everything is good, tells the browser how to read the data it is receiving
    // res.write(data) - where you write your data
    res.end(JSON.stringify({ // sends response to server written out as JSON, anything within JSON stringify can be used as query paramaters
      coin: coin,
      win: coin === params.guess  
    }));
  }
  else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  }
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>404 not found</h1>')
    res.end() // ends the server response
    console.log('could not find ', page)
  }
  // fs.createReadStream('index.html').pipe(res)
  console.log(page, params)
})

server.listen(process.env.PORT || 3000)
