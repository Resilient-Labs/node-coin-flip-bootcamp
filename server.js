// ACCESS TO BROWSER - https://nodejs.dev/learn/the-nodejs-fs-module
const http = require('http');
// FILE SERVER
const fs = require('fs')
// MAKES THE BROWSER HUMAN VISIBLE
const url = require('url');
// QUERY PARAMETERS
const querystring = require('querystring');
// GRABBING A PACKAGE FROM MPN (404)
const figlet = require('figlet')

// ACCESS TO THE SERVER 
const server = http.createServer(function (req, res) {
  // FROM LOCAL HOST TO THE SPECIFIC PATH NAME
  const page = url.parse(req.url).pathname;
  // CREATING PARAMS THAT STORE PART OF THE QUERY PARAMETER FROM THE HTML
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  // DEFAULT PAGE - LINE 15
  if (page == '/') {
    // readFile has 2 params (fs.readFile filename, call back function and that takes 2 parameters - error and data)
    fs.readFile('index.html', function (err, data) {
      // res is response - writeHead returning a status code to the browser
      res.writeHead(200, { 'Content-Type': 'text/html' });
      
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if ('student' in params) {
      let random = Math.ceil(Math.random() * 2) === 1 ? 'heads' : 'tails'
      console.log(random)
      if (params['student'] == random) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller",
          result: "Winner"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if (params['student'] != random) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown",
          result: "Loser"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
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
});

server.listen(8000);
