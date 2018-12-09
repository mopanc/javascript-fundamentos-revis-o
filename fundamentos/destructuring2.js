const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
/* isto é uma desestruturação aninhada.
o primeiro elemento foi ignorado, o segundo elemento é uma array onde 
se esta a ignorar o primeiro e temos o segundo "nota"
então estamos a dizer, ignore o primeiro. vá para o segundo.
no segundo ignore o primeiro e imprima o segundo, que é 6
*/
