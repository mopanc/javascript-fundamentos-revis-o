const prod1 = {
    nome: `...`,
    preco: 45
}

//factory simples, é uma função que sempre retorna um valor obj

function criarPessoa() {
    return {
        nome: `Ana`,
        sobrenome: `silva`
    }
}

console.log(criarPessoa())