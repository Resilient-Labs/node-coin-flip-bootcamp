const http = require('http'); //Acces to server
const fs = require('fs')//Access to disk
const url = require('url');//access to URL
const querystring = require('querystring');//Allow to read what is requested
const figlet = require('figlet')//return error the browser

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;//Tells you the path name of html page and calls it page
  // const params = querystring.parse(url.parse(req.url).query);//holds Query Parmemeter fi there is any
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);//writes the data that goes into that while
      res.end();
    });
  }
  else if (page == '/master.css') {
    fs.readFile('master.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/main.js') {
    fs.readFile('main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/head.png') {
    fs.readFile('head.png', function(err, data) {
      // res.writeHead(200, {'Content-Type': 'text/'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/tail.png') {
    fs.readFile('tail.png', function(err, data) {
      // res.writeHead(200, {'Content-Type': 'text/'});
      res.write(data);
      res.end();
    });
  }

  // else if (page == '/api') {
  //   if('student' in params){
  //     if(params['student']== 'leon'){
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       const objToJson = {
  //         name: "leon",
  //         status: "Boss Man",
  //         currentOccupation: "Baller"
  //       }
  //       res.end(JSON.stringify(objToJson));//.stringify makes the JSON a string
  //     }//student = leon
  //     else if(params['student'] != 'leon'){
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       const objToJson = {
  //         name: "unknown",
  //         status: "unknown",
  //         currentOccupation: "unknown"
  //       }
  //       res.end(JSON.stringify(objToJson));
  //     }//student != leon
  //   }//student if
  // }//else if
  // else if (page == '/css/style.css'){
  //   fs.readFile('css/style.css', function(err, data) {
  //     res.write(data);
  //     res.end();
  //   });
  // }else if (page == '/js/main.js'){
  //   fs.readFile('js/main.js', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/javascript'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
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
