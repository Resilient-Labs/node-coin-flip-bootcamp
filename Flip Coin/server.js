const  http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  console.log(server);
  // this is for the url
  const page = url.parse(req.url).pathname;
  const string = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      // console.log(data);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    console.log(data);

      res.end();
    });
  }
  // else if (page == '/otherpage') {
  //   fs.readFile('otherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // else if (page == '/otherotherpage') {
  //   fs.readFile('otherotherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }


// page is for the url and has not to do with the readfile
  else if (page == '/guess') {
    fs.readFile('guess.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/guess') {
    fs.readFile('guess.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }


  else if (page == '/api') {
    // if ('word' in string) {
          res.writeHead(200, {
              'Content-Type': 'application/json'
          });
          // let checkWord = string['word'];
          let randomize= Math.floor(Math.random() * 2);
              console.log(randomize);
          if (randomize == 1) {
              var answer = "tail";
          } else {
              var answer = "head";
          }
          const objToJson = {
              result: answer
          }
          res.end(JSON.stringify(objToJson));
      // }
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/js/script.js'){
    fs.readFile('js/script.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/image/head.png'){
    fs.readFile('image/head.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }


  else if (page == '/image/tail.png'){
    fs.readFile('image/tail.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }



  else{
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
