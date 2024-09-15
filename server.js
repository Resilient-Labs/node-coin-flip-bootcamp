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
      console.log("hello")
    });
  }
  else if (page == '/findWinner') {
    console.log("playerchoice");
    // issue that needs a tissue
    //change params to different name
    if ('choice' in params){
      let pick = Math.ceil(Math.random()*2)
      console.log("pick");
      let result;
      if (pick === 1){
        result = "heads"
        console.log(result)
      }else{
        result = "tails"
        console.log(result);
      }
      let response;
      if(params['choice']===result){
        response = true
      }else{
        response = false
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(JSON.stringify(response));
    }
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/app.js'){
    fs.readFile('js/app.js', function(err, data) {
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
// const figlet = require('figlet')
//
//
// const server = http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   fs.readFile('index.html', function(error, data) {
//     if (error) {
//       res.writeHead(404)
//       res.write('Error: File Not Found')
//     }else {
//       res.write(data)
//     }
//     res.end()
//   })
// })
// server.listen(8000, function(error) {
//   if (error) {
//     console.log('Oops I think you broke something', error)
//   }else {
//     console.log('Shhh Im listening on port 8000')
//   }
// });
