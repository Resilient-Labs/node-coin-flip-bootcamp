const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }


  else if (page == '/api') {
    const coinToss = Math.floor(Math.random() * 2)
    console.log(coinToss)
    if ('choice' in params) {
      console.log(params['choice'], coinToss)
      if (params['choice'] == coinToss) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          display: "You Win!",
          results: coinToss,

        }
        res.end(JSON.stringify(objToJson));
      }

      else if  (params['choice'] != coinToss) {
       
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          display: "You Lose!",
          results: coinToss,
        }
        res.end(JSON.stringify(objToJson));
      }

    }
  }
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
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

server.listen(8000);

/*note to self: more thoughts 
 //display: params['choice'] == coinToss ? "You Win!" : "You Lose",
//if input 1 = math.random , say you win 
//if input =1 math.random =0, say you lose 
//note to self: maybe this will work
  else if (page === '/api') {
    let coinHeadToss = Math.floor(Math.random()*2)
   if('choice' in params){
    if(params['choice'] === coinHeadToss){
        res.writeHead(200, {'Content-Type': 'application/json'});
       
        console.log(coinHeadToss)

        if(coinHeadToss === 1){
          const objToJson = {
            result: "You Win!",
            display: coinHeadToss,
          }
          res.end(JSON.stringify(objToJson));
        }
        }
       
       
      


  //note to self: thought process 

  /*else if (page == '/api') {
    if ('choice' in params) {
      if (params['choice'] == 'head') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        function theHeads() {

          var theResults = Math.floor(Math.random() * 2);


          return theResults
        }
      }
      function theHeadsGame (){
        let headsResults = theHeads()
      }
      if (headsResults === 1){
        const objToJson = {
          results: "You Won!",
           //status: the results that is generated 
           
         }
         res.end(JSON.stringify(objToJson));
       }
       else {
        const objToJson = {
          results: "You Lose!",
           //status: the results that is generated 
           
         }
         res.end(JSON.stringify(objToJson));

       }
      }
      /*
      function slotReturn() {
  var randomSlot = Math.floor(Math.random() * 5);


  return randomSlot
}
document.querySelector('#max').addEventListener('click', playSlotsAgain)
function playSlotsAgain() {
  let slotone = slotReturnAgain()
  let slottwo = slotReturnAgain()
  let slotthree = slotReturnAgain()
  document.querySelector('#slotone').textContent = (slotone)
  document.querySelector('#slottwo').textContent = (slottwo)
  document.querySelector('#slotthree').textContent = (slotthree)
  if (slotone === slottwo && slotone === slotthree && slottwo === slotthree) {
    increaseFifty();

  }
  else {
    decreaseFifty();

  }
}
      function slotReturn() {
  var randomSlot = Math.floor(Math.random() * 5);


  return randomSlot
} */
