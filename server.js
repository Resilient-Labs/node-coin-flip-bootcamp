// Coded with Brian Melara and Wade Desir from House Gardner


const http = require('http');
const fs =require('fs');
const url=require('url');

let server = http.createServer(function(req,res){
  const page = url.parse(req.url).pathname;
  if (page =='/'){
      fs.readFile('index.html',function(err,data){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
  }else if (page=='/css/style.css'){
    fs.readFile('css/style.css',function(err,data){
      res.write(data)
      res.end()
    })
  }else if (page=='/js/main.js'){
    fs.readFile('js/main.js',function(err,data){
      res.writeHead(200,{'Content-Type' : 'text/javascript'})
      res.write(data)
      res.end()

    })
  }else if (page=='/img/dogecoinSpace.png'){
    fs.readFile('img/dogecoinSpace.png',function(err,data){
      res.write(data)
      res.end()
    })
  }else if (page=='/img/front.png'){
    fs.readFile('img/front.png',function(err,data){
      res.write(data)
      res.end()
    })
  }else if (page=='/img/back.png'){
    fs.readFile('img/back.png',function(err,data){
      res.write(data)
      res.end()
    })
  }
  else{
    console.log(page);
  }
})

server.listen(8000)
