const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
// require('./api/produto')(app, 'Com params')
const produtoApi = require('./api/produto')
produtoApi(app, 'produto tal')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(saudacao('Lucas'))

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.post('/corpo', (req, res) => {
    /* 
    let corpo = ''
    req.on('data', parte => {
        corpo += parte
    })

    req.on('end', () => {
        res.send(corpo)
    }) 
    */

    res.send(JSON.stringify(req.body))
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