const http = require('http'); //an app layer used to exchange data from client<--> server
const fs = require('fs') //file system built into node that provides methods to CRUD and manage files w/out external libraries
const url = require('url');
const querystring = require('querystring');
const path = require('path');
const figlet = require('figlet'); //you would have to install sfiglet to include it in node-modules

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname; //with every request comes a url methos 
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  //page == '/' is referencing the root homepage aka index.html
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if ('coinflip' in params) {
      if (params['coinflip'] == 'heads') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        const coinChoices = ['heads', 'tails']

        let winOrLose

        let outcome = coinChoices[Math.floor(Math.random() * coinChoices.length)]
        
        if (params['coinflip'] == outcome) {
          winOrLose = 'win!'
        } else {
          winOrLose = 'lose!'
        }
        const objToJson = {
          name: "Heads",
          message: `You ${winOrLose}`,
          outcome: `The flip was ${outcome}`
        }
        res.end(JSON.stringify(objToJson));

      }else if (params['coinflip'] != 'heads') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        const coinChoices = ['heads', 'tails']

        let winOrLose

        let outcome = coinChoices[Math.floor(Math.random() * coinChoices.length)]
        if (params['coinflip'] == outcome) {
          winOrLose = 'win!'
        } else {
          winOrLose = 'lose!'
        }
        const objToJson = {
          name: "Tails",
          message: `You ${winOrLose}`,
          outcome: `The flip was ${outcome}`
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
  }else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }else if (page.startsWith('/img')){
    const imagePath = '.' + page;  //extracts the file name
    const imgExtension = path.extname(imagePath).toLowerCase(); //extracts the extension type of the photo
    
    const mimeTypes = { //naming all the possible extensions 
      '.jpg': 'image/jpg',
      '.png': 'image/png',
      '.avif': 'image/avif',
      '.gif': 'image/gif'
    }
    fs.readFile(imagePath, function(err, data){
      res.writeHead(200, { 'Content-Type': mimeTypes[imgExtension] || 'application/octet-stream'}); //here we call the object
      res.write(data);
      res.end();
      console.log(imagePath)
    });
  }else {
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
const PORT = process.env.PORT || 8000; 

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
