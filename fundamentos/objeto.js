//Anotação literal de objetos
//Um objeto é um conjunto de chave e valor, pode ser um texto um numero uma funçao, dentro de um objeto posso ter outros objetos, "categorias"
//dentro de um objeto só se pode ter um nome
const prod1 = {} //um par de chaves representa um objeto, neste caso esta vazio, mas podemos definir todos os seus atributos e funçoes
prod1.nome = 'Celular Mega Hiper' //acabamos de definir o nome dinamicamente do objeto
prod1.preco = 4999.99 // igual o preço
prod1['Desconto Legal'] = 0.40 //evitar usar atributos com espaços

console.log(prod1)

const prod2 = { //esta é outra forma de declarar um objeto
    nome: 'polo',// não esquecer os : e a virgula no final, diferente da form acima com . e =
    preco: 49.90,
}
console.log(prod2)