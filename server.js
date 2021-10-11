const http = require('http');
const fs = require('fs')
const url = require('url');
const figlet = require('figlet')


const server = http.createServer(function (req, res) {
  
const page = url.parse(req.url).pathname;

console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if(page == '/heads.png'){
    fs.readFile('heads.png', function(err, data) {
    res.writeHead(200, {'Content-Type': 'image/png'})
    res.end(data) // Send the file data to the browser.
  })
  }
  else if (page == '/2face.jpg') {
    fs.readFile('2face.jpg', function (err, data) {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.write(data);
      res.end();
    });
  }
  else if(page == '/tails.png'){
    fs.readFile('tails.png', function(err, data) {
    res.writeHead(200, {'Content-Type': 'image/png'})
    res.end(data) // Send the file data to the browser.
  })
  }
  else if (page == '/api') {
    //math
    let coin = Math.ceil(Math.random() * 2) 

    if (coin == 1) { //head
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const objToJson = {
          result: "Heads",
          coin: "front"
        }
      res.end(JSON.stringify(objToJson));
      }

    else { //tails
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const objToJson = {
        result: "Tails",
        coin: "back"
      }
      res.end(JSON.stringify(objToJson));
    }
  }
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  }

  else {
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
