// uma função é como uma receita de um bolo, recebe uma serie de ingredientes que pode ser usada por varias pessoas e no final vai sair sempre o mesmo bolo
//uma função é um bloco de codigo, com nome para que se possa chamar, ela recebe parametros de entrada e no final pode ser usada em varios locais

//função sem retorno
function imprimirsoma(a, b) {
    console.log(a + b)
}

imprimirsoma(2, 3)
imprimirsoma(2)
imprimirsoma(2, 10, 4, 5, 6, 7)
 
//funçao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
