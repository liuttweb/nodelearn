//用于处理数据，发送数据给前端

const { template } = require('express-art-template')
const fs = require('fs')
const path = require('path')
const list = (req, res) => { //服务端
    const str = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const oDiv = template(path.join(__dirname, '/views/list'), {
        data: str
    })
    fs.writeFileSync(path.join(__dirname, './static/list.html'), oDiv)
    res.send(oDiv)
}
const nameData = (req, res) => { //js请求
    const data = ['name', 'age', 'litngotng', 20, 30];
    res.send(data)
}
exports.nameData = nameData
exports.list = list