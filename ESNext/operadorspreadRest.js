// Operador ... rest (juntar)/spread(espalhar)
//usar rest com parametro de função

//usar spread com objeto
const funcionarios = { nome: 'Maria', salario: 1234.89 }
const clone = { ativo: true, ...funcionarios }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal =['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)