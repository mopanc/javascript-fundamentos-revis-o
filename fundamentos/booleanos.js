let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//estamos a colocar duas negaçoes seguidas !! logo vai ser verdadeiro

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))//o ultimo string tem um espaço logo prevalece a todos os fasos

let nome = '' //a variavel nome esta vazia
console.log(nome || 'Desconhecido') // mandamos imprimir, se no nome tiver algum nome imprime nome, se não imprime desconhecido

