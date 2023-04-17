// GLOBALS
const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
// const figlet = require('figlet')

// SERVER
const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname
  const params = querystring.parse(url.parse(req.url).query)
  console.log(page)
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    })
  }
  else if (page == '/api') {
    let serverFlip = Math.floor(Math.random() * 10)
      if(serverFlip > 5){
        res.writeHead(200, {'Content-Type': 'application/json'}) // 'writeHead' writing headers in the response; status code (200), content-type (here's what the response is, the json object that is returned)
        const objToJson = {
          name: 'heads'
        }
        res.end(JSON.stringify(objToJson)) // 'end' sends the requested data
      }
      else {
        res.writeHead(200, {'Content-Type': 'application/json'})
        const objToJson = {
          name: 'tails'
        }
        res.end(JSON.stringify(objToJson))
      }
    }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data)
      res.end()
    })
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'})
      res.write(data)
      res.end()
    })
  }else{
    // figlet('404!!', function(err, data) {
    //   if (err) {
    //       console.log('Something went wrong...')
    //       console.dir(err)
    //       return
    //   }
    //   res.write(data)
    //   res.end()
    // })
  }
})

server.listen(8000)
