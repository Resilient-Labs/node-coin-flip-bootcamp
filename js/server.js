// worked with alum Rio on this

const http = require('http'); // handles request and responses, creates servers
const fs = require('fs') // gives you access to the file system on your hard drive
const url = require('url'); // able to access both url strings and parses (coverts) them to url objects  -- each part of the string gets turned into a property
const querystring = require('querystring'); // enables us to look at the query parameters within our url

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname; // takes a URL string and then converts it to an object (returns each part of the address as properties)
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page); // logging every page that the user gets into -- this would be seen within the terminal, if it wasn't there, the terminal would be empty
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('coin' in params){
        console.log(params)
        const heads = 0
        const tails = 1
        const serverChoice = Math.floor(Math.random() * 2)
      if(params['coin'] === 'Heads' && serverChoice === tails){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: 'YOU LOST'
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['coin'] === 'Tails' && serverChoice === heads){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: 'YOU LOST'
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['coin'] === 'Heads' && serverChoice === heads){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: 'YOU WON'
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['coin'] === 'Tails' && serverChoice === tails){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: 'YOU WON'
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  }
  else if (page == '/css/style.css'){
    fs.readFile('../css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/main.js'){
    fs.readFile('main.js', function(err, data) {
        if (err) {console.error(err)}
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
});

server.listen(3000);
