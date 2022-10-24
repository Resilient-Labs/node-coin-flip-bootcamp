const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
//this file is server side
const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(params)
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
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

    const flipNum = Math.floor(Math.random() * 2) // random num between 0 and 1.9999 rounded down to nearest int
    //1 is heads 0 is tails for this example
    console.log(flipNum);


    if (params['guess'] == 'Heads' && flipNum === 1) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const objToJson = {
        result: 'You won it was heads!'
      }
      res.end(JSON.stringify(objToJson));
    } else if (params['guess'] == 'Tails' && flipNum === 0) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const objToJson = {
        result: 'You won it was tails!'
      }
      res.end(JSON.stringify(objToJson));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const objToJson = {
        result: 'Sorry you lost!'
      }
      res.end(JSON.stringify(objToJson));
    }



    //----------------------------------Leons Code------
    // if ('student' in params) {
    //   if (params['student'] == 'leon') {
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     const objToJson = {
    //       name: "leon",
    //       status: "Boss Man",
    //       currentOccupation: "Baller"
    //     }
    //     res.end(JSON.stringify(objToJson));
    //   }//student = leon
    //   else if (params['student'] != 'leon') {
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     const objToJson = {
    //       name: "unknown",
    //       status: "unknown",
    //       currentOccupation: "unknown"
    //     }
    //     res.end(JSON.stringify(objToJson));
    //   }//student != leon
    // }//student if
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
