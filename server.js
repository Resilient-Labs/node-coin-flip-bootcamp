var hostname = '127.0.0.1'; //adding the local host
const http = require('http');
// const path = require('path');
const fs = require('fs');

const server = http.createServer(function (request, response) {
 fs.readFile('index.html', function(err, data) {
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write(data);
   response.end();
 });
}).listen(8000, hostname); //put the variable of the local host inside the listen function


// const PORT = process.env.PORT || 7000;
// //environment variable or 5000
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
