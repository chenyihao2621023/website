const http = require('http')

http.createServer(function(req,res) {
  res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
  res.end('hello world')
}).listen(3000)
console.log('server running on http')
