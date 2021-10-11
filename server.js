const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
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

  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  }

  else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }

  else if (page == '/img/front.png') {
    fs.readFile('img/front.png', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.write(data);
      res.end();
    });
  }


  else if (page == '/img/back.png') {
    fs.readFile('img/back.png', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.write(data);
      res.end();
    });
  }

  else if (page == "/api") {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const flip = Math.ceil(Math.random() * 2) === 1 ? 'heads' : 'tails';
    const objToJson = {
      flip: flip
    }

    res.end(JSON.stringify(objToJson));
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












// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// const server = http.createServer((req,res) => {
//     let filePath = path.join(__dirname, '', req.url === '/' ? 'index.html' : req.url);

//     let extname = path.extname(filePath);

//     let contentType ='text/html';

//     switch(extname){
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//         case '.png':
//             contentType = 'image/png';
//             break;
//         case '.jpg':
//             contentType = 'image/jpg';
//             break;
//     }

//     fs.readFile(filePath, (err, content) => {
//         if(err) {
//             if(err.code == 'ENOENT') {
//                 // Page not found
//                 fs.readFile(path.join(__dirname, '', '404.html'), (err, content) => {
//                     res.writeHead(200, {'Content-Type': 'text/html'});
//                     res.end(content, 'utf8');
//                 })
//             } else {
//                 //Some server error
//                 res.writeHead(500);
//                 res.end(`Server Error: ${err.code}`);
//             }
//         } else {
//             //Success
//             res.writeHead(200, {'Content-Type': contentType });
//             res.end(content, 'utf8');

//         }
//     });
// });

// const PORT = process.env.PORT || 8000;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
