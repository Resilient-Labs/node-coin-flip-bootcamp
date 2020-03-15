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
  else if (page == '/calculateWinnerHeads') {
     let pick = Math.ceil(Math.random()*2)
     let victory;
     if (pick === 1){
      victory = true
     }else{
     victory = false
     }
     let response = {
       winner : victory,
       lost : "You Lost Better Luck Next Time"
     }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(JSON.stringify(response));

  }else if (page == '/calculateWinnerTails') {
       let pick = Math.ceil(Math.random()*2)
       let victory;
       if (pick === 1){
       victory = true
       }else{
        victory = false
       }
       let response = {
         winner : victory,
         lost : "You Lost Better Luck Next Time"
       }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(JSON.stringify(response));

    }else if (page == '/back.png'){
      fs.readFile('back.png', function(err, data) {
        res.write(data);
        res.end();
      });
    }else if (page == '/front.jpg'){
      fs.readFile('front.jpg', function(err, data) {
        res.write(data);
        res.end();
      });
    }else if (page == '/css/style.css'){
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


  // else if (page == '/otherotherpage') {
  //   fs.readFile('otherotherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // else if (page == '/api') {
  //   if('student' in params){
  //     if(params['student']== 'leon'){
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       const objToJson = {
  //         name: "leon",
  //         status: "Boss Man",
  //         currentOccupation: "Baller"
  //       }
  //       res.end(JSON.stringify(objToJson));
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
