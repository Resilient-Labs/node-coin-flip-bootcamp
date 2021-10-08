const http = require('http'); //an object that gives access to network
const fs = require('fs'); //gives access to files on harddrive
const url = require('url');
const querystring = require('querystring'); // enables us to look at the qeury parameters on our url

http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query); // query parameters

  if (page == '/') { //loading project
    fs.readFile('index.html', function (err, data) { //reading the 'demofile' file + responds
      res.writeHead(200, { 'Content-Type': 'text/html' }); //200 means everything is ok (like the response and the sever status)
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') { //for the fetch call

    if ('guess' in params) {
      let heads = 0
      let tails = 1
      flip = Math.floor(Math.random() * 2)

      if (params['guess'] == 'heads' && flip === 1) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: 'you lose  ' + " "
        }
        res.end(JSON.stringify(objToJson));
      }
      else if (params['guess'] == 'heads' && flip == 0) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: 'you won  ' + " "
        }
        res.end(JSON.stringify(objToJson));
      }
      else if (params['guess'] == 'tails' && flip == 0) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: 'you lose  ' + " "
        }
        res.end(JSON.stringify(objToJson));
      }
      else if (params['guess'] == 'tails' && flip == 1) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: 'you won  '+ " "
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  }
  else if (page == '/main.js') {
    fs.readFile('main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }
}).listen(8001);
//createserver is a method that can listen for a request + respond using a network
//the 8000 is the port number 