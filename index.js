const express = require('express')
const app = express()

app.get('/ola', (req, res) => {
    res.send('Estou funcionando!')
})

app.listen(3000, () => {
    console.log('Backend executando...');
})