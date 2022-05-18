const http = require('http');//telling server to get access to network
const fs = require('fs')// is giving server access to your local files
const url = require('url'); // the url is the url
const querystring = require('querystring');// is the paramater of the url
const figlet = require('figlet')


const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });



  } else if (page == '/api') { // this is what we will use for the fetch call
    if ('bet' in params) {
      let tails = 1
      let heads = 0
      let flip = Math.floor(Math.random() * 2)
      if (params['bet'] == 'Heads' && flip === 0) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const resultForServer = {
          result: "Heads up! You won.",
        }
        res.end(JSON.stringify(resultForServer));
      }
      else if (params['bet'] == 'Heads' && flip === 1) {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        const resultForServer = {
          result: "Head out - you lost.",

        }
        res.end(JSON.stringify(resultForServer));
      }
      else if (params['bet'] == 'Tails' && flip === 0) {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        const resultForServer = {
          result: "The CPU was ahead of the pack...you were the tail-end.",
        }
        res.end(JSON.stringify(resultForServer));
      }
      else if (params['bet'] == 'Tails' && flip === 1) {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        const resultForServer = {
          result: "A hero's tail - you won!",

        }
        res.end(JSON.stringify(resultForServer));
      }
    }
  } else if (page == '/main.js') {
    fs.readFile('main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else if (page == '/flipPic.gif') {
    fs.readFile('flipPic.gif', function (err, data) {
      res.writeHead(200), { 'Content-Type': 'image/gif' }
      res.write(data)
      res.end()
    })
  } else if (page == '/style.css') {
    fs.readFile('style.css', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
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
server.listen(8000);