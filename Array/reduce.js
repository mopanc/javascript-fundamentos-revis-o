const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acomulador, atual) {
    console.log(acomulador, atual)
    return acomulador + atual
}, 0)

console.log(resultado)

/* o reduce pega no primeiro valor que neste caso fomos nos que o indicamos o 0
soma ao segundo valor, e leva para o segundo callback a soma dos dois, colocando esse resultado na primeira posição
e o 3 elemento , somando novamente e levando para o resultado a seguir, e assim sucessivamente
ate ao final dano a soma total*/