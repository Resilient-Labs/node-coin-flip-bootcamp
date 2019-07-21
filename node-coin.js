const http = require('http');
const fs = require('fs');

const PORT = 8000;

http.createServer(function (req, res) {
  const url = req.url;

  if (url === '/sal1.png') {
    fs.readFile('./sal1.png', function(err, data) {
      if (err) {
        console.error('There was an error: ', err);
      } else {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        res.end();
      }
    });
  } else if (url === '/sal2.png') {
    fs.readFile('./sal2.png', function(err, data) {
      if (err) {
        console.error('There was an error: ', err);
      } else {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        res.end();
      }
    });
  } else if (url === '/sal3.png') {
    fs.readFile('./sal3.png', function(err, data) {
      if (err) {
        console.error('There was an error: ', err);
      } else {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        res.end();
      }
    });
  } else {
    fs.readFile('./index.html', function(err, data) {
      if (err) {
        console.error('There was an error: ', err);
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      }
    });
  }
}).listen(PORT, function(){
  console.log('Server running on port: ', PORT);
});
