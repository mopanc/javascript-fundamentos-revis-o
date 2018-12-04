console.log(7 / 0)
console.log("10" / 2)
//no caso acima a divisão não faz sentido com a string que declaramos, logo ele vai procurar sentido e o unico é efetuar a divisão do numero  
console.log('3' + 2)
//acima, o + faz sentido nas strings logo ele vai concatenar vai devolver 32
console.log('3' - 2)
//aqui voltamos ao 1 exemplo, o menos não faz sentido no mundo das strings, logo vai fazer o calculo
console.log("show!" * 2)
console.log(0.1 + 0.7)//deveria dar 0.8 mas ele devolve um numero flutuante
//console.log(10.toString())
console.log((10.345).toFixed(2))