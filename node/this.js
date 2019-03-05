console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

//atençao que o this dentro de uma função altera como podem ver no exemplo

function logthis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logthis()