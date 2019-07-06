//não aceita repetições nem é indexada
const equipas = new Set()
equipas.add('Fcporto')
equipas.add('Scbraga').add('Rio ave').add('Vitoria SC')
equipas.add('Famalicao')
equipas.add('Fcporto')

console.log(equipas)
console.log(equipas.size)
console.log(equipas.has('fcporto'))
console.log(equipas.has('Fcporto'))
equipas.delete('Scbraga')
console.log(equipas.has('Scbraga'))

const nomes = ['Jorge', 'Gabriella', 'Hugo']
const nomesSet = new Set(nomes)
console.log(nomesSet)