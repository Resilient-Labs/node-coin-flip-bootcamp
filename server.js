const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
// const figlet = require('figlet')

var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};


const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('pick' in params){
      res.writeHead(200, {'Content-Type': 'application/json'});
      let isHeads = Math.floor(Math.random() * Math.floor(2))===1
      console.log(`Is Heads?: ${isHeads}`)
      const objToJson = {
        isHeads: isHeads
      }
      res.end(JSON.stringify(objToJson));

    }
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
  } else if (page=='/img/profile-picture.jpg') {
    fs.readFile('/img/profile-picture.jpg', function(err, data) {
      // res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else if (page=='/img/logo-white.png') {
    fs.readFile('/img/logo-white.png', function(err, data) {
      // res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    })
  }else{
    fs.readFile('404.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
    // figlet('404!!', function(err, data) {
    //   if (err) {
    //       console.log('Something went wrong...');
    //       console.dir(err);
    //       return;
    //   }
    //   res.write(data);
    //   res.end();
    // });
  }
});

server.listen(8000);
