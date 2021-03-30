
const fs = require('fs');
const mime = require('mime');
const path = require('path');

function readFindFile(fileName) {

    return new Promise((resolve, rejects) => {
        if (!fs.existsSync(fileName)) {
            resolve('你访问的文件夹里面没有 index.html')
        }
        fs.readFile(fileName, (err, res) => {
            if (err) {
                resolve('你访问的文件夹里面没有 index.html')
            } else {
                resolve(res)
            }
        });
    })
}

async function readStaticFile(fileName, res) {
    const ext = path.parse(fileName).ext;
    const mimeType = mime.getType(ext) || 'text/html';
    let data;
    if (fs.existsSync(fileName)) {
        if (ext) {
            data = await readFindFile(fileName)
        } else {
            data = await readFindFile(path.join(fileName, 'index.html'))
        }
    } else {
        res.end('not found file')
    }
    return { data, mimeType }
}

module.exports = readStaticFile;