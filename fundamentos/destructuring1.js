const pessoa = {
    nome: 'Ana',
    idade: 20,
    endereco: {
        morada: 'rua abc',
        numero: 100,
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n,i)

const { sobrenome, bemHumurada = true} = pessoa
console.log(sobrenome, bemHumurada)

const { endereco: {morada, numero, cp}} = pessoa
console.log(morada, numero,cp)

/*const {conta: {ag, num}} = pessoa
console.log(ag, num)
 cuidado a tentar desestruturar  um dado aninhado pois o caminho deve estar livre se não da erro
*/