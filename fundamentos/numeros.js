const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//aqui estamos a perguntar se o valor de peso1 é inteiro, ele devolve true or false
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//o tofixed passa as casas decimais que queremos imprimir
console.log(media.toString(2))//gerar um numero binario
console.log(typeof media)//este typeof é number
console.log(typeof Number)// este typeof e function são tipos de number diferentes