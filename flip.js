//  person needs an option
// options either head or tails(input)

// display is the client // 

// client side
// coin head or tail 
// testing head or tail 

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');



const server = http.createServer((req,res)=>{
  const page = url.parse(req.url).pathname; 
  console.log(page)
    const params = querystring.parse(url.parse(req.url).query);
    
    if (page == '/') {
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }

       
    else if (page == '/api') {
      let nameInput = params['coinFlip'].toLowerCase()
    if('coinFlip' in params){
  
        res.writeHead(200,   {"Content-Type": "application/json"})
        
        flipDice = ["Head", "Tail"]
        
       let dagi = flipDice[Math.floor(Math.random() * flipDice.length)].toLowerCase()

      
        
        if(nameInput === dagi){
        winner = "You Won"
        }

        else{
        winner = "You Loss"
        }

        // object 
        const jawn = {
            result : `${dagi}`,
            message : "Head",
            winner : winner
        }


        res.end(JSON.stringify(jawn));


} 
    }

    else if (page == '/js/main.js'){
        fs.readFile('js/main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
    } 
    else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }

})
server.listen(8000) // starts the server 