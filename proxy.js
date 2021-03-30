const http = require('http');


http.createServer((req, res) => {
    res.write('proxy');
    res.end()
}).listen(3001)