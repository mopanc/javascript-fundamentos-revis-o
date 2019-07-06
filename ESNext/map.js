const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //a chave nunca pode ser duplicada se tentar ele vai substituir pela ultima, ja os valores podem ser repetidos
console.log(chavesVariadas)