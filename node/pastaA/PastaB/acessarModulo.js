const moduloA = require('../../moduloa')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

//em vez desta forma de ../ para sai da pasta e procurar na anterior,
//pode-se colocar o endereço absoluto, botão direito e copy path na pasta
///Users/jorgemorais/Desktop/exercicios-js/node/moduloa.js

//ao fazer o require podemos dar apenas o nome da pasta que queremos e ele vai buscar sempre o arquivo index

const http = require('http')
http.createServer((req, res) => {
    res.write('bom dia!')
    res.end()
}).listen(8080)