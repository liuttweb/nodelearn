//用于挂载中间件

const express = require('express');
const path = require('path')
const app = express();
const router = require('./router');

//json
app.use(express.json())

//表单
app.use(express.urlencoded({ extended: false }))

//静态资源服务中间件
app.use(express.static('./static'))


app.engine('art', require('express-art-template'));
app.set('view', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');


app.use('/', router)


app.listen(8080, () => {
    console.log('running at localhost:8080')
})