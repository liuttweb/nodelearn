const express = require('express');
const app = express();
const middleweares = [
    (req, res, next) => {
        console.log(0)
        next();
    }, (req, res, next) => {
        console.log(1)
        next()
    }, (req, res, next) => {
        console.log(2)
        next();
    }
]
app.use('/', middleweares)
app.use('/api', (req, res) => {
    console.log(4)
})
app.listen(8080, () => {
    console.log('running at localhost:8080')
})