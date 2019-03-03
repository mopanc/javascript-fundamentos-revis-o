const moduloA = require('../../moduloa')
console.log(moduloA.ola)

//em vez desta forma de ../ para sai da pasta e procurar na anterior,
//pode-se colocar o endereço absoluto, botão direito e copy path na pasta
///Users/jorgemorais/Desktop/exercicios-js/node/moduloa.js



const http = require('http')
http.createServer((req, res) => {
    res.write('bom dia!')
    res.end()
}).listen(8080)