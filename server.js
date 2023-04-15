const http = require('http')
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

// const Express = require('express');
// const app = new Express();

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);

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
    fs.readFile('index.html', function(err, data) {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(data)
    res.end()
    });
  }
  else if (page === '/coin') { // creates a coin page
    let flipCoin = Math.floor(Math.random()*2) + 1
    let head = 0
    let tail = 0
    flipCoin === 1 ? head=+ 1 : tail=+ 1

    res.writeHead(200, {'Content-Type': 'application/json'}); // 200 = everything is good, tells the browser how to read the data it is receiving
    // res.write(data) - where you write your data
    res.end(JSON.stringify({ // sends response to server written out as JSON, anything within JSON stringify can be used as query paramaters
      coin: flipCoin,
      heads: head, 
      tails: tail
    }));
  }
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>404 not found</h1>')
    res.end() // ends the server response
  }
  // fs.createReadStream('index.html').pipe(res)
  console.log(page, params)
})

server.listen(process.env.PORT || 3000)
