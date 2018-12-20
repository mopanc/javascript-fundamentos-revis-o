 // coleção dinamica de pares chave/valor
 const produto = new Object
 produto.nome = 'cadeira'
 produto['marca do produto'] = 'Generica'
 produto.preco = 220

 console.log(produto)
 delete produto.preco
 delete produto['marca do produto']
 console.log(produto)



 const carro = { //objeto
     modelo: 'A4',
     valor: 89000,
     proprietario: { //objeto dentro de objeto
         nome: 'Raul',
         idade: 56,
         endereco: {
             rua: 'rua abc',
             numero: 123,
         }
     }, //mais dois objetos dentro de objeto
     condutores: [{
         nome:'junior',
         idade: 20,
     }, {
         nome: 'Ana',
         idade: 32,
     }],
     calcularValorSeguro: function() { //funções dentro de objetos
         // ...
     }
 }

 carro.proprietario.endereco.numero = 1000
 carro['proprietario']['endereco']['rua'] = 'av.praça'

 console.log(carro)

 //delete carro.condutores
 delete carro.proprietario.endereco
 delete carro.calcularValorSeguro

 console.log(carro)
 console.log(carro.condutores)
 console.log(carro.condutores.length) //cuidado ao tentar acessar dados não definidos da erro
