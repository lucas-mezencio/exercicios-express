const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')

app.use(saudacao('Lucas'))

app.use('/ola', (req, res, next) => {
    console.log('antes...');
    next()
})

app.get('/ola', (req, res, next) => {
    console.log('durante...');
    res.json({
        name: 'ipad',
        price: 1899.00,
        discount: 0.10
    })
    next()
})

app.use('/ola', (req, res) => {
    console.log('depois...')
})

app.listen(3000, () => {
    console.log('Backend executando...');
})