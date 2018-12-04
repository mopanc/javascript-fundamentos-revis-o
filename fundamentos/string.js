//string é uma cadeia de caracteres que podem ser delimitadas por "" aspas duplas, ' aspas simples e crase//
const escola = "cod3r"

console.log(escola.charAt(4))//aqui estamos a pedir que nos devolva a 4 letra do que escola recebeu, ou seja coder, vai devolver r
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//codigo relacionado a tabela unicode consultar no google
console.log(escola.indexOf('3'))

console.log(escola.substring(1))//aqui vai imprimir todos apartir do 1, ou seja oder
console.log(escola.substring(0, 3))// va do indice 0 e va ate ao indece 3 aqui imprime do 0 ate ao 3 mas não imprime o 3 imprime o 0, 1, 2 cod

console.log('escola '.concat(escola).concat("!"))//aqui podemos fazer de duas formas, assim e a de baixo, ele vai concatenar as strings entre aspas junto com a variavel
console.log('escola ' + escola + '!')
console.log(escola.replace(3, 'e'))// pode usar tambem "/\d/, 'e'" que é o mesmo que dizer substitua todos os digitos pela letra e

console.log('Ana,Maria,Pedro'.split(','))// ele cria uma array com os nomes divididos em ,
