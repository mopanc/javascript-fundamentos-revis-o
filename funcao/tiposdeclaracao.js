console.log(soma(3, 4))


// function declaration pode-se chamar em qualquer parte do codigo porque a função declarada vai ser carregada antes de executar o codigo
function soma(x, y) {
    return x + y
}

//function expression aqui não pode chamar antes, só depois da declaracao da função
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4))

//named function expression
const mult = function mult(x, y) {
    return x * y
}
