const http = require('http')

http.createServer(function(req,res) {
  res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
  res.end('����Ϊ�Ǵ����')
}).listen(8081)
console.log('server running on http')
