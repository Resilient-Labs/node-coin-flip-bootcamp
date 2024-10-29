//  Loading Modules--------------------------------------------------------------------
const http = require('http'); // create server
const fs = require('fs'); // get files, work with files and folders on your server
const url = require('url'); // see url
// -----------------------------------------------------------------------------


const server = http.createServer(function(req, res) {   
  const page = url.parse(req.url).pathname; // get the pathname from the URL
  console.log(page);

  //--------------------------------------------------------------------------------
  
  // Serve index.html on the home page
  if (page === '/') { 
    fs.readFile('index.html', function(err, data) { 
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.write('Error loading index.html');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.write(data); 
      }
      res.end();
    });
  }
  
  // Serve main.js on request to /js/main.js
  else if (page === '/js/main.js') { // Ensure the path uses forward slashes
    fs.readFile('js/main.js', function(err, data) {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/javascript'});
        res.write('Error loading main.js');
      } else {
        res.writeHead(200, {'Content-Type': 'text/javascript'}); 
        res.write(data);
      }
      res.end();
    });
  }
  
  // 404 handling for other pages
  else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
    res.end();
  }
});

// Start server on port 8000
server.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
});
