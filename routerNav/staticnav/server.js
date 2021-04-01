const http = require('http');
const path = require('path');
const readStaticFile = require('./readStaticFile.js');
http.createServer(async (req, res) => {
    const urlStr = req.url;
    if (urlStr.indexOf('.ico') > -1) return
    const fileName = path.join(__dirname, '/dist', urlStr);
    const { data, mimeType } = await readStaticFile(fileName, res)
    res.writeHead(200, {
        'content-type': `${mimeType}; charset=utf-8`
    })
    res.write(data);
    res.end();
}).listen(8080, () => {
    console.log('running at localhost:8080')
})