// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC';
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaconstante =Object.freeze({ nome: 'João'})
console.log(pessoaconstante)
// esta é a forma para congelar para fazer de um objeto constante 
