console.log(typeof Object) // isto é uma funçao
console.log(typeof new Object) // aqui estamos a instanciar uma função

const Cliente = function() {} //const cliente recebeu uma funçao
console.log(typeof Cliente)
console.log(typeof new Cliente) // aqui também foi gerado um object

class Produto {} //ES 2015 (ES6) padrão do ecmanscrypt 
console.log(typeof Produto)
console.log(typeof new Produto()) // instanciando passa a object
 //a funçao pode ser instanciada apartir da palavra new
// se selecionar uma sentença ele so executa essa mesma seleção