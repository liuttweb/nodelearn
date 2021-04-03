//用于处理数据，发送数据给前端

const { template } = require('express-art-template')

const list = (req, res) => {
    const str = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const oDiv = template(__dirname + '/views/list', {
        data: str
    })
    res.send(oDiv)
}
const nameData = (req, res) => {
    const data = ['name', 'age', 'litngotng', 20, 30];
    res.send(data)
}
exports.nameData = nameData
exports.list = list