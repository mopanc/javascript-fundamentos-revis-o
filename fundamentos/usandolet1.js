var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)

}
console.log('fora =', numero)

//neste caso com um var e um let, cada numero vai ter um valor diferente

var numero = 1
{
    let numero2 = 2
    console.log('dentro =', numero)

}
console.log('fora =', numero)

// se alterarmos o numero do let, ele vai devolver o mesmo numero 1 para as duas chamadas


//********* Muito importante *********/

//Variaveis definidas com a palavra reservada 'var' têm escopo global e escopo de função
//Variaveis definidas com a palavra reservada 'let' tem escopo global, escopo de função e escopo de bloco