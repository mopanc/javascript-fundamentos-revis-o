const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])//devolve o valor 0 e o valor 3
console.log(valores[4])/*não devolve o valor porque ainda nao foi 
definido, devolve undefined
*/

valores[4] = 10 //aqui atribuimos ao valor 4 o 10 pois não tinha valor algum
console.log(valores)//aqui mostra os valores da array
console.log(valores.length)// aqui mostra quantos valores tem a array

valores.push({id: 3}, false, null, 'teste')/*aqui para mostrar que podemos
 misturar varios valores, inclusive strings
 */
console.log(valores)

console.log(valores.pop())//.pop elimina o ultimo array
delete valores[0] // deleta a array [0]
console.log(valores)

console.log(typeof valores) //tipo de valores é object