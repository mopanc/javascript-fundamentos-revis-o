const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    olá
    ${nome}!`

console.log(concatenacao, template)

//Expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)