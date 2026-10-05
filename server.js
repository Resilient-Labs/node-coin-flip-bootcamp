/* person needs option heads or tails and win statements */

const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

const flipCoin = ['Heads', 'Tails']

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

  } else if (page == '/js/main.js') {

    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'})
      res.write(data)
      res.end()
    })

  } else if (page == '/css/style.css') {

    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'})
      res.write(data)
      res.end()
    })

  } else if (page == '/api') {

    if ('coinFlip' in params) {

      const userChoice = params['coinFlip']

      const randomFlip =
        flipCoin[Math.floor(Math.random() * flipCoin.length)]

      let winOrLose

      if (userChoice == randomFlip) {
        winOrLose = 'Won'
      } else {
        winOrLose = 'Lost'
      }

      console.log(randomFlip)

      const objToJson = {
        yourChoice: userChoice,
        flipResult: `The flip was ${randomFlip}`,
        result: `You ${winOrLose}!`
      }
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(objToJson))
    }
  }
})

server.listen(8000)


//http://localhost:8000/






/*
flipArray = ['Heads', 'Tails']
    if('student' in params){
      if(params['student']== 'Heads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        randomFlip = flipArray[Math.floor(Math.random() * 2)]
        if(params['student'] == randomFlip){
          winOrLose = 'Won'
        }else{
          winOrLose = 'Lose'
        }
        console.log(randomFlip)
        const objToJson = {
          yourChoice: "Heads",
          flipResult: `The flip was ${randomFlip}`,
          currentOccupation: `You ${winOrLose}!`
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] == 'Tails'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        randomFlip = flipArray[Math.floor(Math.random() * 2)]
        if(params['student'] == randomFlip){
          winOrLose = 'Won'
        }else{
          winOrLose = 'Lose'
        }
        console.log(randomFlip)
        const objToJson = {
          yourChoice: "Tails",
          flipResult: `The flip was ${randomFlip}`,
          currentOccupation: `You ${winOrLose}!`
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon */ 