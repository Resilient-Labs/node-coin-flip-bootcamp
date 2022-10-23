const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer(function (req, res) {

    const page = url.parse(req.url).pathname;
    console.log(page);

    // Function will be called based on the path. 
    const readWrite = (file, content) => {
        fs.readFile(file, function(err, data) {
          res.writeHead(200, {'Content-Type': content});
          res.write(data);
          res.end();
        });
      }

    switch(page) {

        case '/':
            readWrite("index.html", "text/html")
            break;
        case '/js/main.js':
            readWrite("js/main.js", "text/javascript")
            break;
        case '/css/style.css':
            fs.readFile('css/style.css', function(err, data) {
            res.write(data);
            res.end();
            });
            break;
    
        case '/css/normalize.css':
            fs.readFile('css/normalize.css', function(err, data) {
                res.write(data)
                res.end()
            });
            break;
        case '/api': 
            
            let flipResault = ''; // Empty String for now
            let img = '';
            let randomNum = Math.floor(Math.random() * 2) // Get a number between 0 and 1

            // If the random number is 0, let flipResault = heads
            if(randomNum == 0) {
                flipResault = 'heads',
                img = 'https://www.pngkey.com/png/full/146-1464786_400px-circle-quarter-heads-side-of-coin.png'
            }else {
                flipResault = 'tails',
                img = 'https://upload.wikimedia.org/wikipedia/commons/5/5a/98_quarter_reverse.png'
            }
            res.writeHead(200, {'Content-Type': 'application/json'})

            // Create an object
            const objToJson = {
                result : flipResault,
                image : img
            }
            // Convert the object into a json object
            res.end(JSON.stringify(objToJson))
            break;
    }
  
    // if (page == '/') {
    //   fs.readFile('index.html', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     res.end();
    //   });
    // }  else if (page == '/css/style.css'){
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
    // }else if (page == '/css/normalize.css') {
    //     fs.readFile('css/normalize.css', function(err, data) {
    //         res.write(data);
    //         res.end();
    //     })
    // }else if (page == '/api') {

    //     let flipResault = ''; // Empty String for now
    //     let randomNum = Math.floor(Math.random() * 2) // Get a number between 0 and 1

    //     // If the random number is 0, let flipResault = heads
    //     if(randomNum == 0) {
    //         flipResault = 'heads'
    //     }else {
    //         flipResault = 'tails'
    //     }
    //     res.writeHead(200, {'Content-Type': 'application/json'})

    //     // Create an object
    //     const objToJson = {
    //         result : flipResault
    //     }
    //     // Convert the object into a json object
    //     res.end(JSON.stringify(objToJson))

    // }


}).listen(8000);