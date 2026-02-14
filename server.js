const http = require('http'); 
const fs = require('fs')
const url = require('url');
const querystring = require('querystring'); 

//initializing with the server

const server = http.createServer(function(req, res) { //creating a variable server which uses http to create the server and creates a function which is res and req
  const page = url.parse(req.url).pathname; //pathname is route of the url and comes after the / in the url
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  //linking client side with server side using api
  else if (page == '/coinflip') {
    const coin = Math.random() < 0.5 ? "Head" : "Tail" //if statement that gives the output from the flip function
const objToJson = {
     key: coin
        }
        res.writeHead(200, {'Content-Type': 'application/json'}); 
        res.end(JSON.stringify(objToJson));
 }
 
//sending data back to the client
 else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/client.js'){
    fs.readFile('client.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });

  }
});


server.listen(8000);
