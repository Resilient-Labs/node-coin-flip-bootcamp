const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet') //wordART


//when the user types in a url, the user is making a request to the server to return information to fill the browser


const server = http.createServer(function (req, res) {
  //this server is setup to hear different requests
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') { //server is set up to listen/hear/ look for this
    //
    fs.readFile('otherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') { //and this
    fs.readFile('otherotherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {//and this
    arr = ['heads', 'tails']
    if ('coin' in params) {
      if (params['coin'] == 'heads') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        randomizeArray = arr[Math.floor(Math.random() * arr.length)]
        if (randomizeArray == params['coin']) {
          result = 'You Win'
        } else {
          result = 'You lost'
        }
        const objToJson = {
          winOrLose: `${result}`
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if (params['coin'] == 'tails') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        randomizeArray = arr[Math.floor(Math.random() * arr.length)]
        if (randomizeArray == params['coin']) {
          result = 'You Win'
        } else {
          result = 'You lost'
        }
        const objToJson = {
          winOrLose: `${result}`
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css') {//and this
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {//and this
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) { //if the page does not contain anything that the 'page' is == to then this will 
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
