const http = require('http')
const fs = require('fs')
const url = require('url')


const server = http.createServer(function(req, res){
     const page = url.parse(req.url).pathname  

if(page === '/'){
    fs.readFile('index.html', function(err, contentOfFile){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(contentOfFile)
        res.end()
    })
}  
else if (page === '/js/client.js') {
    fs.readFile('js/client.js', function(err, contentOfFile) {
      res.writeHead(200, {'Content-Type': 'text/javascript'})
      res.write(contentOfFile)
      res.end()
    })
} else if (page === '/style.css') {
  fs.readFile('style.css', function(err, contentOfFile) {
    res.writeHead(200, {'Content-Type': 'text/css'})
    res.write(contentOfFile)
    res.end()
  })
}
  else if (page === '/flipCoin'){

    let flipOfCoinMath = Math.random() <= 0.5 ? 'YOU GOT HEADS!' : 'YOU GOT TAILS!'
    
    const resToJSON = {resultOfCoinFlip: flipOfCoinMath}

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(resToJSON))
}else{

    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('404 Not Found')
  }

})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})