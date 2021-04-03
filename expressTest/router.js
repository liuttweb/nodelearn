//用于获取请求，分类api接口

const express = require('express');
const router = express.Router();
const { list, nameData } = require('./controller');

router.get('/api/list', list)
router.get('/api/data', nameData)



module.exports = router