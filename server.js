//activate server using this
//nodeJS is an interpret -- interprets input as  JS code -- output anything
//nodeJS can have empty file 
//takes JS code and runs it 
//JS opens up browser 
//nodeJS works on a terminal interpret where it interpret JS
//nodeJS -- helps differentiate difference between webpage and browser
//browser and JS can work independent 
//

//require=requesting whatever inside para file
//http-set up set webserver
//fs- access file system (can be a whole comp--whatever we tell it)
const http = require('http');
const fs = require('fs');
// const static= require('node-static')
// const file= new static.Server('./public')

//directs webserver to create a server, server takes in request of function. tells the function whats on it 
http.createServer(function (req, res) {
  fs.readFile('index.html', function (err, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data);
    res.end();
  });
}).listen(8000);