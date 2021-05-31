const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')

app.use(saudacao('Lucas'))

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.post('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', parte => {
        corpo += parte
    })

    req.on('end', () => {
        res.send(corpo)
    })
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


app.listen(3000, () => {
    console.log('Backend executando...');
})