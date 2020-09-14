const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

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
  else if (page == '/images/heads.png') {
    fs.readFile('images/heads.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/images/tails.png') {
    fs.readFile('images/tails.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'images/png'});
      res.write(data);
      res.end();
    });
  }
//   else if (page == '/otherpage') {
//     fs.readFile('otherpage.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
//   else if (page == '/otherotherpage') {
//     fs.readFile('otherotherpage.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
//   else if (page == '/api') {
//     if('student' in params){
//       if(params['student']== 'leon'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         const objToJson = {
//           name: "leon",
//           status: "Boss Man",
//           currentOccupation: "Baller"
//         }
//         res.end(JSON.stringify(objToJson));
//       }//student = leon
//       else if(params['student'] != 'leon'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         const objToJson = {
//           name: "unknown",
//           status: "unknown",
//           currentOccupation: "unknown"
//         }
//         res.end(JSON.stringify(objToJson));
//       }//student != leon
//     }//student if
//   }//else if
  else if (page == '/css/stylesheet.css'){
    fs.readFile('css/stylesheet.css', function(err, data) {
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
