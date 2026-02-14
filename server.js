//worked on this with housemates (house Hayden)
//https://www.youtube.com/watch?v=sRKZeVqG4dA
const http = require('http');
const fs = require('fs');
const url = require('url');
const figlet = require('figlet');
const port = process.env.PORT || 8003;//want to host the project on render

const server = http.createServer((req, res) =>{
    const page=url.parse(req.url).pathname;
    console.log(page);

    //Routing
    if(page == '/'){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();

        });
    } else if (page =='/style.css'){
        fs.readFile('style.css', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/css'})
            res.write(data);
            res.end();
        })
    } else if (page == '/main.js'){
        fs.readFile('main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
    }
   //link client side with server side
    else if(page == '/coinflipapi'){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        const result = Math.random()<0.5? 'Head': 'Tail';
        console.log(result)
        res.end(result);
        
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

})


server.listen(port, () =>{
    console.log(`Server is running at ${port}`);

});
