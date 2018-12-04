//armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma (2, 3)

//armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

//retorno implicito
const subtracao = (a, b) => a- b // este metodo só da para uma função de uma linha
console.log(subtracao(2, 1))
