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
  else if (page == '/flip') { // Button (client-side event listener in JS) requests for the API requests. "Here you can build your own API using the raw node method" - Leon. API is an interface for some complex action and get data back

    // try {

      let result = Math.random();
      console.log(result)

      if(result < .5){
        result = 'heads'
        console.log(result)
        if(result === 'heads'){ // Is the parameter 'heads'? = YES
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            side: 'heads'
          }
          res.end(JSON.stringify(objToJson));
        }//student = leon
      } else {
          if(result !== 'heads'){ // If the parameter is not 'heads'..
            
            res.writeHead(200, {'Content-Type': 'application/json'});
            const objToJson = {
              side: 'tails'
            }
            res.end(JSON.stringify(objToJson));
          }//coin != heads
        }
    
      // } catch (error) {
      //   console.error('Error processing string:', error.message);
      //   // Implement error handling logic here
      // }
  

    // FRONT-END VERSION: BACK-END PART (2/2)
    // if('coin' in params){ // Is student a query parameter?
    //   if(params['coin']== 'heads'){ // Is the parameter 'leon'? = YES
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       side: 'heads'
    //     }
    //     res.end(JSON.stringify(objToJson));
    //   }//student = leon
    //   else if(params['coin'] != 'heads'){ // If the parameter is not 'leon'..
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       side: 'tails'
    //     }
    //     res.end(JSON.stringify(objToJson));
    //   }//coin != heads
    // }//coin if
    // END OF FRONT-END VERSION

  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
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

server.listen(3333);

/*Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game*/