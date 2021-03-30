const http = require('http');
const fs = require('fs');
const mime = require('mime');
const { url } = require('inspector');
http.createServer((req, res) => {
    const ureString = req.url;
    console.log(ureString)
    const type = mime.getType(ureString.split('.')[1])
    if (ureString === '/favicon.ico') return
    // switch (ureString) {
    //     case '/':
    //         fs.readFile('./index.html', (err, content) => {
    //             // res.write('aaaads')
    //             res.end(content)
    //         })
    //         break;
    //     case '/app.js':
    //         fs.readFile('./app.js', (err, content) => {
    //             res.end(content)
    //         })
    //         break;

    //     default:
    //         res.end('page 404')
    //         break;
    // }
    res.writeHead(200, {
        'content-type': type
    })
    const data = fs.readFileSync(`.${ureString}`)
    res.end(data)
}).listen(8080, () => {
    console.log('running at localhost:8080')
})