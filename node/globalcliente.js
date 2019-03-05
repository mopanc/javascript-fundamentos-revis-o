require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Opa!' //exemplo de como até este objeto que estamos a declarar global, pode ser modificado em qualquer lugar, para isso voltamos a global e fazemos um freeze
console.log(MinhaApp.nome)