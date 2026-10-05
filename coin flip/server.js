



const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

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

  else if (page == '/api') {
    if ('coinFlip' in params) {
      res.writeHead(200, { 'Content-Type': 'application/json' });

      const flipDice = ['Head', 'Tail'];
      const flippies = flipDice[Math.floor(Math.random() * flipDice.length)];

      let winner;
      // accepts "head", "heads", "Tail", "tails", etc.
      const guess = params['coinFlip'].trim().toLowerCase().replace(/s$/, '');
      if (guess === flippies.toLowerCase()) {
        winner = 'You Won';
      } else {
        winner = 'You Lose';
      }

      const jawn = {
        result: flippies,
        message: params['coinFlip'],
        winner: winner
      };

      res.end(JSON.stringify(jawn));
    }
    else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing coinFlip' }));
    }
  }

  else if (page == '/css/normalize.css') {
    fs.readFile('css/normalize.css', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
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

  else if (page == '/assets/images/coins.png') {
    fs.readFile('assets/images/coins.png', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
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

  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(8000);


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
//   else if (page == '/css/style.css'){
//     fs.readFile('css/style.css', function(err, data) {
//       res.write(data);
//       res.end();
//     });
//   }else if (page == '/js/main.js'){
//     fs.readFile('js/main.js', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/javascript'});
//       res.write(data);
//       res.end();
//     });
//   }else{
//     figlet('404!!', function(err, data) {
//       if (err) {
//           console.log('Something went wrong...');
//           console.dir(err);
//           return;
//       }
//       res.write(data);
//       res.end();
//     });
//   }
// });

// server.listen(8000);