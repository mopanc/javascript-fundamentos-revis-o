const nums = [1, 2, 3, 4, 5]

//for com proposito
let resultado = nums.map(function(e) {
    return e * 2
})
//criamos uma variavel resultado e atribuimos ao map uma função (e) que gera um novo array
//(e) * 2 poderia ser * 20 que devolve a mesma array com os parametros alterados
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `${parseFloat(e).toFixed(2).replace('.', ',')} €`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)