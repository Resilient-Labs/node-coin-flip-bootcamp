const http = require('http');
const fs =require('fs');
const url=require('url');
// const querystring = require('querystring')
// const figlet = require('figlet')

http.createServer(function(req,res){
  const page = url.parse(req.url).pathname;
  // const params = querystring.parse(url.parse(req.url).query);
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
}
}).listen(8000)
