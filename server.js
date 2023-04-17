const http = require('http'); //creates the server and  
const fs = require('fs') // file system gives you access to fie=les and for
const url = require('url');// it takes url strings and parses to urls objects
const querystring = require('querystring'); // 
// const figlet = require('figlet') // makes our text look cool inside the terminal

//create server (request and response)
const server = http.createServer(function(req, res) {
  //convert url to path name
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  // big conditional to see path name we're working else it's error
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    let flipped = Math.random()
       if(flipped > .5){
        const objToJson = {
          result: 'heads'
       }
       res.end(JSON.stringify(objToJson))
       }else if(flipped < .5){
        const objToJson = {
          result: 'tails'
       }
       res.end(JSON.stringify(objToJson))
       }//student != leon
    }//student if
  //else if
  else if (page == '/css/style.css'){
    //grab css file from computer
    fs.readFile('css/style.css', function(err, data) {
      //sends that file to the server
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

server.listen(8111);
