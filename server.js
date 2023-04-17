const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet') //yassifies the 404 error 

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') { //path - localhost8000 (or whatever other port #, for example)
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/coinflip') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const math = Math.random()
        const coin = math < 0.5 ? "heads" : "tails"
        const checkStatus = coin === params["guess"] //this [] is building the api url 
        const database = {
          quarter: coin, 
          check: checkStatus //holds if you won or not
        }
        
        res.end(JSON.stringify(database)); //this is what'll turn my database object into data 
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
});

server.listen(8000);








// const http = require('http');
// const fs = require('fs')
// const url = require('url');
// const querystring = require('querystring');
// const figlet = require('figlet') //yassifies the 404 error 

// const server = http.createServer(function (req, res) {
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(req.url).query);
//   console.log(page);
//   if (page == '/') { //path - localhost8000 (or whatever other port #, for example)
//     fs.readFile('index.html', function (err, data) {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write(data);
//       res.end();
//     });
//   } else if (page == '/css/style.css') {
//     fs.readFile('css/style.css', function (err, data) {
//       res.write(data);
//       res.end();
//     });
//   } else if (page == '/js/main.js') {
//     fs.readFile('js/main.js', function (err, data) {
//       res.writeHead(200, { 'Content-Type': 'text/javascript' });
//       res.write(data);
//       res.end();
//     });
//   } else {
//     figlet('404!!', function (err, data) {
//       if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//       }
//       res.write(data);
//       res.end();
//     });
//   }
// });

// server.listen(5526);
