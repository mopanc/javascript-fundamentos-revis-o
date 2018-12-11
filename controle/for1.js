let contador = 1 //declaraçao
while(contador <= 10) { //expressão
    console.log(`contador ${contador}`)
    contador++ // incremento
}

for(let i = 1; i <= 10; i++) { //aqui temos exatamente a mesma coisa com o for
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}
 /*
 aqui na ultima temos o for a trabalhar em coma de uma array
 o a variavel i vai trabalhar sempre até ao ultmo indice da array 
 que é ate 5 pois o indice 0 tambem é numero, e encrementa mais um até ao numero de 5 
 esta forma é muito comum em Js 
*/