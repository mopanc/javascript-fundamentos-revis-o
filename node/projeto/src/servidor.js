const porta = 3003

const express = require('express')
const app = express()


app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Computador', preco: 123.45}) //converte para JSON
})

app.listen(porta, () => {
    console.log(`servidor está executando na porta ${porta}.`)
})