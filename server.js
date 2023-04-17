const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
// Vonds helped me correct this project and I am going to psuedo
const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname
  const params = querystring.parse(url.parse(req.url).query)
  console.log(page)

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data)
      res.end()
    })
  }
  // john helped me with this and explained it to me,
  else if (page == '/coinflip') {
    const randomNum = Math.floor(Math.random() * 2)
    const coin = randomNum ? "heads" : "tails"
    console.log(randomNum)
    const guess = params['guess']
    console.log(`the coin is ${coin}`)
    console.log(`the guess is ${guess}`)
    res.writeHead(200, {'Content-Type': 'application/json'})
    const objToJson = {
      random: coin,
      winOrLoss: coin === guess ? "Win" : "Loss"
    }
    res.end(JSON.stringify(objToJson));
  } else if (page == '/js/app.js'){
    fs.readFile('js/app.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'})
      res.write(data)
      res.end()
    })
  } else {
    console.log('404!!')
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.write('404 Not Found')
    res.end()
  }
})

server.listen(6130)
